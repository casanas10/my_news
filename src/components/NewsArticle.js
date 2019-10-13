/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
    padding: "10px 10px 10px 0",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)"
  },
  imageBox: {
    height: "auto",
    width: "100%"
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  spacing: {
    paddingRight: "1em"
  },
  green: {
    color: "green"
  }
});

const NewsArticle = ({ article }) => {
  const classes = useStyles();

  return (
    <div className={[classes.root, "row"].join(" ")}>
      <div className="col-4">
        <img src={article.urlToImage} className={classes.imageBox}></img>
      </div>
      <div className="col-8">
        <div className="row">
          <a className={classes.title} target="_blank" href={article.url}>
            {article.title}
          </a>
        </div>
        <div className="row">
          <p>{article.content && article.content.substring(0, 150)}</p>
        </div>
        <div className="row">
          <span className={classes.spacing}>Author: {article.author}</span>
          <span className={classes.spacing}>Source: {article.source.name}</span>
        </div>
        <div className="row">
          <span className={(classes.spacing, classes.green)}>
            Sentiment: Positive
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
