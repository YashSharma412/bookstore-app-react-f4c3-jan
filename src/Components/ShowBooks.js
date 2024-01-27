import React, { useContext, useEffect } from "react";
import BooksContext from "../Contexts/BooksContext";
import TopBook from "./TopBook";
import NormalBooks from "./NormalBooks";
function ShowBooks() {
    const {books, fetchBooksFromApi} = useContext(BooksContext);
    useEffect(()=>{
        console.log(books)

    }, [books]);
  return books.length>0 ? (
    <div className="main">
        <div className="top3__books-container">
        {
            books.slice(0,3) && books.slice(0,3).map((book, i)=>(
                <TopBook key={i} book={book}/>
            ))
        }
        </div>
        {
            books.length>3 &&
            <div>
                <h1>More Books</h1>
                <div className="books__grid-display">
                    {
                        books.slice(3) && books.slice(3).map((book,i) =>(
                            <NormalBooks key={i} book={book}/>
                        ))
                    }
                </div>
            </div>
        }
    </div>
  ) : (
    <div className="Loader">
        <h1>Loading...</h1>
    </div>
  )
}

export default ShowBooks;
// <div key={i} className="topBook">
//     {book.volumeInfo.title && book.volumeInfo.imageLinks.thumbnail &&
//     <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>}
//     <div style={{padding: "8px"}}>
//         {book.volumeInfo.title && book.volumeInfo.description && <>
//         <h1 className="book__title">{book.volumeInfo.title}</h1>
//         <p className="book_description">
//             {book.volumeInfo.description.slice(0,240)}
//         </p></>}
//         {book.volumeInfo.infoLink && 
//         <button className="now_read_btn" onClick={()=>{window.open(book.volumeInfo.infoLink, '_blank')}}>Read Now!</button>
//         }
//     </div>
// </div>

// ````````````````````````````
// <div key={i} className="book-container">
//     {book.volumeInfo.title && book.volumeInfo.imageLinks.thumbnail &&
//     <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>}
// </div>