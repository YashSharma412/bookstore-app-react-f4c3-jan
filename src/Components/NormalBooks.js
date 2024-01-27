import React from 'react'

function NormalBooks({book}) {
  return (
    <div className="book-container">
        {
            book.volumeInfo.title && 
            book.volumeInfo.imageLinks.thumbnail &&
            <img 
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title}
            />
        }
    </div>
  )
}

export default NormalBooks;