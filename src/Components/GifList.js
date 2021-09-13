import React from "react";
import PropTypes from "prop-types";
function GifList({ giphyData }) {
  return (
    <div className="flex flex-wrap justify-evenly mt-3 mb-12">
      {giphyData.map((gif) => {
        return (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            className="transform hover:scale-125 hover:z-20 z-0 w-60 h-60  
            bg-no-repeat bg-cover bg-center p-1 rounded-2xl duration-300 ease-in-out "
          />
        );
      })}
    </div>
  );
}

GifList.propTypes = {
  giphyData: PropTypes.array.isRequired,
};

export default GifList;
