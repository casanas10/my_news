import React, { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle";
import { makeStyles } from "@material-ui/core/styles";
import { getNewsArticle } from "../services/newsAPI";
// import articles from "../resources/dummy_data";

const useStyles = makeStyles({
  root: {
    backgroundColor: "blue",
    paddingTop: "1em"
  }
});

const NewsArticlesList = () => {
  const [articlesInfo, setArticlesInfo] = useState([]);

  useEffect(() => {
    getNewsArticle().then(data => setArticlesInfo(data));
  }, []);

  const classes = useStyles();

  return (
    <div className={[classes.root, "container"].join(" ")}>
      {console.log(articlesInfo)}
      {articlesInfo.map((article, key) => (
        <NewsArticle key={key} article={article} />
      ))}
    </div>
  );
};

export default NewsArticlesList;
