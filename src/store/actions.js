import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  // Promise
  //   FETCH_NEWS(context) {
  //     return fetchNewsList()
  //       .then((response) => {
  //         context.commit("SET_NEWS", response.data);
  //         return response;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  //   FETCH_ASK({ commit }) {
  //     return fetchAskList()
  //       .then(({ data }) => {
  //         commit("SET_ASK", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_ASK({ commit }) {
    // 여기서 try를 해도 되고
    try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  //   FETCH_JOBS({ commit }) {
  //     return fetchJobsList()
  //       .then(({ data }) => {
  //         commit("SET_JOBS", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
    commit("SET_JOB", response.data);
    return response;
  },
  //   FETCH_USER({ commit }, userName) {
  //     return fetchUserInfo(userName)
  //       .then(({ data }) => {
  //         commit("SET_USER", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_USER({ commit }, userName) {
    const response = await fetchUserInfo(userName);
    commit("SET_USER", response.data);
    return response;
  },
  //   FETCH_ITEM({ commit }, itemId) {
  //     return fetchItemInfo(itemId)
  //       .then(({ data }) => {
  //         commit("SET_ITEM", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchItemInfo(itemId);
    commit("SET_ITEM", response.data);
    return response;
  },
  //   FETCH_LIST({ commit }, pageName) {
  //     return fetchList(pageName)
  //       .then(({ data }) => {
  //         commit("SET_LIST", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};
