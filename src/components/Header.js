import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "purple"
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>My News</h1>
    </div>
  );
};

export default Header;
