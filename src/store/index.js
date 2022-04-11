/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import getPodcastBySearchTerm from '@/api/podcasts.api';
import Podcast from '@/dtos/podcast';
import HTTP_OK from '@/enums/statusCodes';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    podcastSearchResultList: [],
    showSearchResults: false,
    showPageLoader: false,
  },
  getters: {
    podcastSearchResultList(state) {
      return state.podcastSearchResultList;
    },
    showSearchResults(state) {
      return state.showSearchResults;
    },
    showPageLoader(state) {
      return state.showPageLoader;
    },
  },
  mutations: {
    SET_SHOW_SEARCH_RESULTS(state, flag) {
      state.showSearchResults = flag;
    },
    SET_SHOW_PAGE_LOADER(state, flag) {
      state.showPageLoader = flag;
    },
    SET_PODCAST_SEARCH_RESULT_LIST(state, data) {
      try {
        const podcasts = [];
        data.feeds.forEach((podcast) =>
          podcasts.push(
            new Podcast(
              podcast.id,
              podcast.title,
              podcast.author,
              podcast.description,
              podcast.ownerName,
              podcast.link,
              podcast.image,
              podcast.categories
            )
          )
        );
        console.log(podcasts);
        state.podcastSearchResultList = podcasts;
      } catch (error) {
        console.log(error);
        state.podcastSearchResultList = null;
      }
    },
  },
  actions: {
    async fetchPodcasts({ commit }, searchTerm) {
      try {
        commit('SET_SHOW_PAGE_LOADER', true);
        const response = await getPodcastBySearchTerm(searchTerm);
        commit('SET_SHOW_PAGE_LOADER', false);
        if (response.status === HTTP_OK) {
          commit('SET_PODCAST_SEARCH_RESULT_LIST', response.data);
          commit('SET_SHOW_SEARCH_RESULTS', true);
        } else {
          commit('SET_PODCAST_SEARCH_RESULT_LIST', null);
          commit('SET_SHOW_SEARCH_RESULTS', false);
        }
      } catch (error) {
        console.log(error);
        commit('SET_PODCAST_SEARCH_RESULT_LIST', null);
        commit('SET_SHOW_SEARCH_RESULTS', false);
        commit('SET_SHOW_PAGE_LOADER', false);
      }
    },
  },
  modules: {},
});
