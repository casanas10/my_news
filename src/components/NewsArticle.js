import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "yellow"
  }
});

const NewsArticle = ({ article }) => {
  console.log(article);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="row justify-content-between">
        <div className="col-10" style={{ textAlign: "left" }}>
          <h2>{article.title}</h2>
        </div>
        <div
          className="col-2"
          style={{
            textAlign: "right",
            paddingRight: "2em",
            marginTop: "auto",
            marginBottom: "auto"
          }}
        >
          <span>Negative</span>
        </div>
      </div>
      <p>{article.content}</p>
    </div>
  );
};

export default NewsArticle;
