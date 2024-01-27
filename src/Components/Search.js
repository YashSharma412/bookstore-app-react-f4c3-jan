import React from "react";
import { useContext, useState, useEffect } from "react";
import BooksContext from "../Contexts/BooksContext";
// 
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const [srchQuerry, setSrchQuerry] = useState("");
  const { fetchBooksFromApi } = useContext(BooksContext);
  function handleSubmit(e){
    e.preventDefault();
    if(srchQuerry !== ""){
      fetchBooksFromApi([srchQuerry.trim().split(" ").join("+")]);
      setSrchQuerry("");
    }
    // setBooks([]);
  }

  useEffect(() => {
   fetchBooksFromApi(["harry+potter", "Sherlock+Holmes"]);
  }, []);

  return (
    <form className="search-component" onSubmit={handleSubmit}>
      <div
        className="search-container"
        style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <label htmlFor="search-input">
          <FaSearch style={{ color: "#808080" }} size={20} />
        </label>
        <input
          type="text"
          id="search-input"
          className="search-input"
          name="search"
          placeholder="Search for the book you want and read it now..."
          onChange={(e)=>setSrchQuerry(e.target.value)}
          value={srchQuerry}
        />
      </div>
      <button type="submit" className="search btn">Search</button>
    </form>
  );
};

export default Search;
