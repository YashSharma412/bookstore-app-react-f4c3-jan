import React from 'react';
import { useState } from 'react';
import BooksContext from './BooksContext';
import axios from "axios";

const BooksProvider = (props)=>{
    const [books, setBooks] = useState([]);
      
  async function fetchBooksFromApi(srchQuerry) {
    try {
      const requests = srchQuerry.map((querry) =>
        axios.get("https://www.googleapis.com/books/v1/volumes", {
          params: {
            q: querry,
          },
        })
      );
      const responses = await Promise.all(requests);
    //   console.log(responses);
      const searchedData = responses.flatMap(
        (response) => response.data.items || []
      );
    //   console.log(searchedData);
      if (Array.isArray(searchedData)) {
          setBooks(searchedData);
      } else {
        setBooks([]);
      }
      // set selected book to null on new search
    } catch (err) {
      console.error("Error fetching data", err);
    }
  }

    return (
        <BooksContext.Provider value={{books, setBooks, fetchBooksFromApi}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksProvider;