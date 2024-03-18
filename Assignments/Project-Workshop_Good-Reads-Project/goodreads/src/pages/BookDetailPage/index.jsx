import { useEffect, useState } from "react"
import BOOK_DATA from "../../data/book"
import Navbar from "../../components/Navbar"
import BookDetail from "../../components/BookDetail"
import { useParams } from "react-router-dom"

const BookDetailPage = () => {
    let { id } = useParams()
    const [ book, setBook ] = useState({})

    useEffect(() => {
        setBook(BOOK_DATA[id])
    }, [id])

    return(
        <>
        <Navbar />
        <BookDetail data={ book}  />
         </>
    )
}
export default BookDetailPage;