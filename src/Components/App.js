import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import axios from "axios";
import dotenv from "dotenv";
import "../index.css";
dotenv.config();

const App = (props) => {
  const [giphy, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trending = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=50&rating=g`
      );
      setData(trending.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen ">
      <SearchBar />
      <GifList giphyData={giphy} />
    </div>
  );
};

export default App;
