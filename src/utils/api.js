import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": 'yt-api.p.rapidapi.com',
  },
}
export const fetchDataFromApi = async (url) => {
  console.log(url)
  const { data } = await axios.get(url === 'home' ? `${BASE_URL}/${url}` : `${BASE_URL}/hashtag?tag=${url}`, options);

  return data;
};
export const fetchVidFromApi = async (url) => {
  console.log(url)
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
};
export const fetchSearchFromApi = async (url) => {
  console.log(url)
  const { data } = await axios.get(`${BASE_URL}/search?query=${url}`, options);

  return data;
};