import React, { useState, useEffect } from 'react';
import BOOK_DATA from '../../data/book';
import Book from './Book';


const BookList = () => {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        setBooks(BOOK_DATA)
    }, [])

    return(
        <div className="container">
            <h1 className="text-center">All Books</h1>
            <div className="row">
                {
                    books.map((book, index) => (
                        <Book key={index} data={ book } />
                    ))
                }
            </div>
        </div>
    )
}
export default BookList