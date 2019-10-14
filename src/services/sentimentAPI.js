import axios from "axios";

const BaseURL = "https://markada.herokuapp.com/v1/news/?url=";

export const getSentiment = async url_to_article => {
  const result = await axios
    .get(BaseURL + url_to_article)
    .then(({ data }) => data.sentiment);
  return result;
};
