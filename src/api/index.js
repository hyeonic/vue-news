import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
async function fetchNewsList() {
  //   return axios.get(config.baseUrl + "news/1.json");
  //   return axios.get(`${config.baseUrl}news/1.json`); // new Promise()를 return
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchAskList() {
  //   return axios.get(`${config.baseUrl}ask/1.json`);
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchJobsList() {
  // 데이터를 받을 때 try catch를 해도 되고
  try {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;
    //   return await axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(userName) {
  //   return axios.get(`${config.baseUrl}user/${userName}.json`);
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(itemId) {
  // return axios.get(`${config.baseUrl}item/${itemId}.json`);
  try {
    return await axios.get(`${config.baseUrl}item/${itemId}.json`);
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
};
