import axios from "axios";
import React from "react";

const API_KEY = process.env.NEWS_API_KEY;
const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
const EVERYTHING_URL = "https://newsapi.org/v2/everything?apiKey=";

export const getNewsArticle = async () => {
  const result = await axios.get(URL).then(({ data }) => data && data.articles);
  return result;
};

export const getNewsArticlesForKeyword = async keyword => {
  const result = await axios
    .get(EVERYTHING_URL + API_KEY + "&q=" + keyword)
    .then(({ data }) => data && data.articles);
  return result;
};
