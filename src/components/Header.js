import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "purple",
    paddingTop: "1em",
    paddingBottom: "1em"
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={[classes.root, "container"].join(" ")}>
      <h1>My News</h1>
    </div>
  );
};

export default Header;
