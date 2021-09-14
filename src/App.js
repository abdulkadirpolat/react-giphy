import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import GifList from "./Components/GifList";
import ReactLoading from "./Components/ReactLoading";
import axios from "axios";
import dotenv from "dotenv";
import "./index.css";
dotenv.config();

function App(props) {
 // const [giphy, setData] = useState([]);
  const [giphySearch, setDataSearchData] = useState([]);
  const [searchChange, setSearchChange] = useState("");
  const [searcDefault, setSearchDefault] = useState("");
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      // const fetchData = async () => {
      //   const trending = await axios.get(
      //     `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=20&rating=g`
      //   );
      //   setData(trending.data.data);
      // };
      const fetchSearch = async () => {
        const searchChangeData = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${searcDefault}&rating=g&api_key=${process.env.REACT_APP_API_KEY}&limit=20&offset=0 `
        );
        setDataSearchData(searchChangeData.data.data);
        setLoading(true);
        console.log(giphySearch);
      };
      //  fetchData();
      fetchSearch();
    }, 3000);
  }, [searcDefault]);

  const search = (e) => {
    setSearchChange(e.target.value.trim().toLowerCase());
  };
  const defaultSubmit = (e) => {
    if (searchChange == "") {
      return false;
    }
    setSearchDefault(searchChange);
    //    setSearchChange("");
    e.preventDefault();
  };

  return (
    <div className="container mx-auto min-h-screen ">
      {!loading ? (
        <ReactLoading />
      ) : (
        <>
          <SearchBar
            searchChange={searchChange}
            changeContent={search}
            defaultSubmit={defaultSubmit}
          />
          <GifList giphyData={giphySearch } />
        </>
      )}
    </div>
  );
}

export default App;
