import React from "react";
import { useState, useEffect, useContext } from "react";
import BooksContext from "./Contexts/BooksContext";
import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
import ShowBooks from "./Components/ShowBooks";
function App() {
  const { books, setBooks } = useContext(BooksContext);


  return (
    <div className="App">
      <Navbar>
        <Logo />
        <Search/>
      </Navbar>
      <ShowBooks />
    </div>
  );
}

export default App;
