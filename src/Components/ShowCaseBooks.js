import React, { useContext, useEffect } from "react";
import BooksContext from "../Contexts/BooksContext";

function ShowCaseBooks() {
  const { books, setBooks, fetchBooksFromApi } = useContext(BooksContext);

//   useEffect(() => {
//     fetchBooksFromApi(["harry+potter", "Sherlock+Holmes"]);
//   }, []);

  return (
    <div className="showcase-container">
      {books &&  books.length > 0 ? (
        <div className="books-container">
          <div className="top3__books-container">
            {books.slice(0, 3).map((book, i) => (
              <div key={i} className="Top__books">
                {book.volumeInfo && (
                  <>
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={`${book.volumeInfo.title} img`}
                    />
                    <div>
                      <h1 className="book__title">{book.volumeInfo.title}</h1>
                      <p className="book_description">
                        {book.volumeInfo.description.slice(0, 240)}
                      </p>
                    <button className="now_read_btn">Now Read</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* {
                            books.slice(3).length > 0 ? 
                            (
                                <div className="more-books-container">
                                    <h1>More Books</h1>
                                    <div className="book-grid">
                                        {
                                            books.slice(3).map((book,i) =>(
                                                <div key={i} className="book">
                                                    <img
                                                        src={book.volumeInfo.imageLinks.thumbnail}
                                                        alt={book.volumeInfo.title}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                            : (
                                <div>
                                    <p>No more search results...</p>
                                </div>
                            )
                        } */}
        </div>
      ) : (
        <div className="Loader">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default ShowCaseBooks;

//   return (
//     <div className="showcase-container">
//       {books.length > 0 ? (
//         <div className="books_container">
//           {books.map((book, i) => (
//             <div key={i} className="bookContainer">
//               {book.volumeInfo && (
//                 <><h5>{book.volumeInfo.title}</h5>
//                   {book.volumeInfo.imageLinks && (
//                     <img
//                       src={book.volumeInfo.imageLinks.thumbnail}
//                       alt={book.volumeInfo.title}
//                     />
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No books found</p>
//       )}
//     </div>
//   );
