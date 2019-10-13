import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NewsArticlesList from "./components/NewsArticlesList";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <NewsArticlesList />
    </div>
  );
};

export default App;
