import { useEffect, useState } from "react"
import BOOK_DATA from "../../data/book"
import Navbar from "../../components/Navbar"
import BookDetails from "../../components/BookDetails/";

const BookDetailPage = () => {
    const [book, setBook] = useState({})

    useEffect(() => {
        setBook(BOOK_DATA[0])
    })

    return (
        <>
            <Navbar />
            <BookDetails data={book} />
        </>
    )
}
export default BookDetailPage;