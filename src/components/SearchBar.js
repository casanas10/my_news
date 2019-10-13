import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "orange",
    marginTop: "1em",
    marginBottom: "1em",
    paddingTop: "1em",
    paddingBottom: "1em"
  },
  searchBox: {
    width: "100%"
  }
});

const SearchBar = () => {
  const [tickerSymbol, setTickerSymbol] = useState("AAPL");

  const classes = useStyles();

  return (
    <div className={[classes.root, "container"].join(" ")}>
      <div className="search-params">
        <form>
          <label htmlFor="tickerSymbol">
            <input
              className={classes.searchBox}
              id="tickerSymbol"
              value={tickerSymbol}
              placeholder="Search for..."
              onChange={e => setTickerSymbol(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
