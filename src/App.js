import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import GifList from "./Components/GifList";
import axios from "axios";
import dotenv from "dotenv";
import "./index.css";
dotenv.config();
const searchchange = "crazy";
function App(props) {
  const [giphy, setData] = useState([]);
  const [giphySearch, setDataSearchData] = useState([]);
  const [searchChange, setSearchChange] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      const trending = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=50&rating=g`
      );
      setData(trending.data.data);
    };

    const fetchSearch = async () => {
      const searchChangeData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchchange}&rating=g&api_key=${process.env.REACT_APP_API_KEY}&limit=20&offset=0 `
      );
      setDataSearchData(searchChangeData.data.data);
    };

    fetchSearch();
    fetchData();
  }, []);

  const changeContent = (e) => {
    setSearchChange(e.target.value.trim());
  };

  const defaultSubmit = (e) => {
    e.preventDefault();

    if (searchChange === "") {
      return false;
    }
  };

  const search = (e) => {
    setSearchChange(e.target.value.trim().toLowerCase());
  };

  return (
    <div className="container mx-auto min-h-screen ">
      <SearchBar  searchChange={searchChange} changeContent={changeContent} defaultSubmit={defaultSubmit}
       />
      <GifList giphyData={giphy} />
    </div>
  );
}

export default App;
