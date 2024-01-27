import React, { useState } from 'react'

function NormalBooks({book}) {
    const [showDetails, setShowDetails] = useState(false);

  return ( !showDetails ?
    <div className="book-container" onClick={()=>setShowDetails(true)}>
        {
            book.volumeInfo.title && 
            book.volumeInfo.imageLinks.thumbnail &&
            <img 
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title}
            />
        }
    </div> : 
    <div className='book_detailed-container' onClick={()=>setShowDetails(false)}>
        <div className='book_img-container'>
            {
                book.volumeInfo.title && 
                book.volumeInfo.imageLinks.thumbnail &&
                <img 
                    src={book.volumeInfo.imageLinks.thumbnail} 
                    alt={book.volumeInfo.title}
                />
            }
        </div>
        <div className='book__details'>
            <h1 className='book__title'>
                {
                    book.volumeInfo.title &&
                    <span>{book.volumeInfo.title},</span> 
                }
                {
                    book.volumeInfo.subtitle &&
                    <span>{book.volumeInfo.subtitle}</span> 
                }
            </h1>
            {
                book.volumeInfo.authors && 
                <h3 className='book__author'>{book.volumeInfo.authors.join(" ")}</h3>
            }
            {
                book.volumeInfo.description && 
                <p className='book__description'>{book.volumeInfo.description}</p>
            }

        </div>

    </div>
  )
}

export default NormalBooks;