import React from "react";
import NewsArticle from "./NewsArticle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "blue"
  }
});

const NewsArticlesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>List of Articles</h1>
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
    </div>
  );
};

export default NewsArticlesList;
