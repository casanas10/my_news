import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    backgroundColor: "orange"
  }
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchIcon />
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchBar;
