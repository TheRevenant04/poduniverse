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
    setShowSearchResults(state, flag) {
      state.showSearchResults = flag;
    },
    setShowPageLoader(state, flag) {
      state.showPageLoader = flag;
    },
    setPodcastSearchResultList(state, data) {
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
    setPodcastDetails(state, data) {
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
    setEpisodeDetails(state, data) {
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
        commit('setShowPageLoader', true);
        const response = await getPodcastBySearchTerm(searchTerm);
        commit('setShowPageLoader', false);
        if (response.status === HTTP_OK) {
          commit('setPodcastSearchResultList', response.data);
          commit('setShowSearchResults', true);
        } else {
          commit('setPodcastSearchResultList', null);
          commit('setShowSearchResults', false);
        }
      } catch (error) {
        console.log(error);
        commit('setPodcastSearchResultList', null);
        commit('setShowSearchResults', false);
        commit('setShowPageLoader', false);
      }
    },
    async fetchPodcastsByFeedId({ commit }, feedId) {
      try {
        commit('setShowPageLoader', true);
        const response = await getPodcastByFeedId(feedId);
        commit('setShowPageLoader', false);
        if (response.status === HTTP_OK && response.data.feed.length !== 0) {
          commit('setPodcastDetails', response.data);
        } else {
          commit('setPodcastDetails', null);
        }
      } catch (error) {
        console.log(error);
        commit('setPodcastDetails', null);
        commit('setShowPageLoader', false);
      }
    },
    async fetchEpisodesByFeedId({ commit }, feedId) {
      try {
        commit('setShowPageLoader', true);
        const response = await getEpisodesByFeedId(feedId);
        commit('setShowPageLoader', false);
        if (response.status === HTTP_OK) {
          commit('setEpisodeDetails', response.data);
        } else {
          commit('setEpisodeDetails', null);
        }
      } catch (error) {
        console.log(error);
        commit('setEpisodeDetails', null);
        commit('setShowPageLoader', false);
      }
    },
  },
  modules: {},
});
