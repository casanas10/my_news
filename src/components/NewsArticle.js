/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
    marginTop: "2rem"
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
  },
  red: {
    color: "red"
  },
  black: {
    color: "black"
  }
});

const NewsArticle = ({ article }) => {
  const BaseURL = "https://markada.herokuapp.com/v1/news/?url=";
  const [sentiment, setSentiment] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BaseURL}${article.url}`);
      const body = await result.json();
      setSentiment(body.sentiment);
    };
    fetchData();
  }, [article]);

  const classes = useStyles();

  var sent;

  if (sentiment === "-1") {
    sent = (
      <span className={(classes.spacing, classes.red)}>
        Sentiment: Negative
      </span>
    );
  } else if (sentiment === "0") {
    sent = (
      <span className={(classes.spacing, classes.black)}>
        Sentiment: Neutral
      </span>
    );
  } else {
    sent = (
      <span className={(classes.spacing, classes.green)}>
        Sentiment: Positive
      </span>
    );
  }

  return (
    <div className={[classes.root, "container"].join(" ")}>
      <div className="row">
        <div className="col-4" style={{ paddingLeft: "0" }}>
          <a href={article.url}>
            <img src={article.urlToImage} className={classes.imageBox}></img>
          </a>
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
            <span className={classes.spacing}>
              Source: {article.source.name}
            </span>
          </div>
          <div className="row">{sent}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
