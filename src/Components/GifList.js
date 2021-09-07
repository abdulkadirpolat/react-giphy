import React from "react";
const GifList = (props) => {
  return (
    <div className="flex flex-wrap justify-evenly mt-3 mb-12">
      {props.giphyData.map((giphy) => {
        return (
          <img
            key={giphy.id}
            src={giphy.images.fixed_height.url}
            className="transform hover:scale-125 hover:z-20 z-0 w-60 h-60  
            bg-no-repeat bg-cover bg-center p-1 rounded-2xl duration-300 ease-in-out "
          />
        );
      })}
    </div>
  );
};

export default GifList;
