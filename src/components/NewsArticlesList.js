import React, { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle";
import { makeStyles } from "@material-ui/core/styles";
import { getNewsArticlesForKeyword } from "../services/newsAPI";

const useStyles = makeStyles({
  root: {
    paddingLeft: 0,
    paddingTop: "1em"
  },
  searchBox: {
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "80%",
    textIndent: "10px",
    border: "2px solid #ddd"
  },
  submitButton: {
    paddingRight: "0",
    paddingLeft: "0",
    width: "20%",
    paddingTop: "15px",
    paddingBottom: "15px",
    background: "#ddd",
    border: "2px solid #ddd",
    cursor: "pointer"
  }
});

const NewsArticlesList = () => {
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [tickerSymbol, setTickerSymbol] = useState("AAPL");

  useEffect(() => {
    getNewsArticlesForKeyword(tickerSymbol).then(articles => {
      setArticlesInfo(articles);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className={[classes.root, "container"].join(" ")}>
      <form
        onSubmit={e => {
          e.preventDefault();
          getNewsArticlesForKeyword(tickerSymbol).then(articles => {
            setArticlesInfo(articles);
          });
        }}
      >
        <div className={classes.border}>
          <input
            className={classes.searchBox}
            type="text"
            value={tickerSymbol}
            placeholder="Search for stock ticker symbol.."
            onChange={e => setTickerSymbol(e.target.value)}
            required
          />
          <button className={classes.submitButton} type="submit">
            Search
          </button>
        </div>
      </form>
      {articlesInfo.map((article, key) => (
        <NewsArticle key={key} article={article} />
      ))}
    </div>
  );
};

export default NewsArticlesList;
