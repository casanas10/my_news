import axios from "axios";
import React from "react";

const API_KEY = process.env.NEWS_API_KEY;
export const URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

export const getNewsArticle = async () => {
  console.log(API_KEY);
  console.log(URL);

  const result = await axios.get(URL).then(({ data }) => data && data.articles);
  return result;
};
