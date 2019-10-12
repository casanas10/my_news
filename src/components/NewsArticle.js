import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "yellow"
  }
});

const NewsArticle = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>This is a news article</h2>
      <p>by :</p>
    </div>
  );
};

export default NewsArticle;
