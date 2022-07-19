/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import Episode from '@/dtos/episode';
import Podcast from '@/dtos/podcast';
import HTTP_OK from '@/enums/statusCodes';
import Vue from 'vue';
import Vuex from 'vuex';
import {
  getEpisodesByFeedId,
  getPodcastByFeedId,
  getPodcastBySearchTerm
} from '../api/podcasts.api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchString: '',
    podcastSearchResultList: [],
    showSearchResults: false,
    showPageLoader: false,
    podcastDetails: {},
    podcastEpisodes: {},
  },
  getters: {
    searchString(state) {
      return state.searchString;
    },
    podcastSearchResultList(state) {
      return state.podcastSearchResultList;
    },
    showSearchResults(state) {
      return state.showSearchResults;
    },
    showPageLoader(state) {
      return state.showPageLoader;
    },
    podcastDetails(state) {
      return state.podcastDetails;
    },
    podcastEpisodes(state) {
      return state.podcastEpisodes;
    },
  },
  mutations: {
    setSearchString(state, data) {
      state.searchString = data;
    },
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
        state.podcastSearchResultList = podcasts;
      } catch (error) {
        console.log(error);
        state.podcastSearchResultList = null;
      }
    },
    SET_PODCAST_DETAILS(state, data) {
      try {
        if (data === null) {
          state.podcastDetails = null;
        } else {
          const podcast = data.feed;
          state.podcastDetails = new Podcast(
            podcast.id,
            podcast.title,
            podcast.author,
            podcast.description,
            podcast.ownerName,
            podcast.link,
            podcast.image,
            podcast.categories
          );
        }
      } catch (error) {
        console.log(error);
        state.podcastDetails = null;
      }
    },
    SET_EPISODE_DETAILS(state, data) {
      const episodes = [];
      try {
        data.items.forEach((episode) => {
          episodes.push(
            new Episode(
              episode.id,
              episode.title,
              episode.description,
              episode.datePublishedPretty,
              episode.duration,
              episode.link,
              episode.image
            )
          );
        });
        state.podcastEpisodes = episodes;
      } catch (error) {
        console.log(error);
        state.podcastEpisodes = null;
      }
    },
  },
  actions: {
    async fetchPodcastsBySearchTerm({ commit }, searchTerm) {
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
    async fetchPodcastsByFeedId({ commit }, feedId) {
      try {
        commit('SET_SHOW_PAGE_LOADER', true);
        const response = await getPodcastByFeedId(feedId);
        commit('SET_SHOW_PAGE_LOADER', false);
        if (response.status === HTTP_OK && response.data.feed.length !== 0) {
          commit('SET_PODCAST_DETAILS', response.data);
        } else {
          commit('SET_PODCAST_DETAILS', null);
        }
      } catch (error) {
        console.log(error);
        commit('SET_PODCAST_DETAILS', null);
        commit('SET_SHOW_PAGE_LOADER', false);
      }
    },
    async fetchEpisodesByFeedId({ commit }, feedId) {
      try {
        commit('SET_SHOW_PAGE_LOADER', true);
        const response = await getEpisodesByFeedId(feedId);
        commit('SET_SHOW_PAGE_LOADER', false);
        if (response.status === HTTP_OK) {
          commit('SET_EPISODE_DETAILS', response.data);
        } else {
          commit('SET_EPISODE_DETAILS', null);
        }
      } catch (error) {
        console.log(error);
        commit('SET_EPISODE_DETAILS', null);
        commit('SET_SHOW_PAGE_LOADER', false);
      }
    },
  },
  modules: {},
});
