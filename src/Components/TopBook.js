import React from 'react'
import { useState } from 'react';
function TopBook({book}) {
  return (
    <div className="topBook">
        {
            book.volumeInfo.title && 
            book.volumeInfo.imageLinks.thumbnail &&
            <img 
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title}
            />
        }
        <div style={{padding: "8px"}}>
            {
                book.volumeInfo.title &&
                book.volumeInfo.description &&
                 <>
                    <h1 className="book__title">{book.volumeInfo.title}</h1>
                    <p className="book_description">{book.volumeInfo.description.slice(0,240)}</p>
                </>
            }
            {
                book.volumeInfo.infoLink && 
                <button 
                    className="now_read_btn" 
                    onClick={()=>{window.open(book.volumeInfo.infoLink, '_blank')}}>
                Read Now!
                </button>
            }
        </div>
    </div>
  )
}

export default TopBook;