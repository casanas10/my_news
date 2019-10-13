import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    padding: "0",
    marginTop: "1em",
    paddingTop: "1em",
    paddingBottom: "1em"
  },
  // border: {
  //   border: "2px solid #ddd"
  // },
  searchBox: {
    // float: "left",
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "80%",
    textIndent: "10px",
    border: "2px solid #ddd"
  },
  submitButton: {
    // float: "right",
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

const SearchBar = () => {
  const [tickerSymbol, setTickerSymbol] = useState("AAPL");

  const classes = useStyles();

  return (
    <div className={[classes.root, "container"].join(" ")}>
      <div className={classes.border}>
        <input
          className={classes.searchBox}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button className={classes.submitButton} type="submit">
          Search
        </button>
      </div>

      {/* <form>
        <label className={classes.searchBox} htmlFor="tickerSymbol">
          <input
            id="tickerSymbol"
            value={tickerSymbol}
            placeholder="Search for..."
            onChange={e => setTickerSymbol(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default SearchBar;
