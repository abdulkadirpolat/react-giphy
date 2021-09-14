import  React from "react";

function SearchBar({ searchChange, defaultSubmit,  changeContent }) {

  return (
    <form
      onSubmit={defaultSubmit}
      className="bg-white sticky top-0 w-full h-16 flex
     items-center justify-center py-3 px-12 shadow-md z-10 "
    >
      <input
       onChange={changeContent}
        className="font-bold h-full w-full max-w-sm text-2xl 
        text-center rounded-md outline-none border-2 border-opacity-70 
        border-gray-300 focus:border-transparent focus:ring-2 
        focus:ring-purple-300 placeholder-gray-300 hover:shadow-md   "
        placeholder="Search gif"
        type="text"
        name="change_content"
        value={searchChange}
      />
    </form>
  );
}

export default SearchBar;
