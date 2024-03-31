import React, { useState, useEffect } from 'react';
// import BOOK_DATA from '../../data/book';
import Book from './Book';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, setBooks } from '../../redux/actions/book-actions';


const BookList = () => {
    //const [ books, setBooks ] = useState([])

    const books = useSelector(state => state.allBooks.books)

    const dispatch = useDispatch()

    useEffect(() => {
        //setBooks(BOOK_DATA)
        //dispatch(setBooks(BOOK_DATA))
        dispatch(fetchBooks())
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