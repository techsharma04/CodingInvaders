import { useEffect, useState } from "react"
import BOOK_DATA from "../../data/book"
import Navbar from "../../components/Navbar"
import BookDetail from "../../components/BookDetail"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addBook, removeBook } from "../../redux/actions/book-actions"

const BookDetailPage = () => {
    let { id } = useParams()
    //const [ book, setBook ] = useState({})
    const book = useSelector(state => state.book)
    const dispatch = useDispatch()

    useEffect(() => {
        //setBook(BOOK_DATA[id])
        dispatch(addBook(BOOK_DATA[id]));

        return () => {
            dispatch(removeBook())
        }
    }, [id])

    return(
        <>
        <Navbar />
        <BookDetail data={ book}  />
         </>
    )
}
export default BookDetailPage;