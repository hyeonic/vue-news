import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then((response) => {
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then((response) => {
        commit("SET_ASK", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then((response) => {
        commit("SET_JOBS", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then((response) => {
        commit("SET_USER", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then((response) => {
        commit("SET_ITEM", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
