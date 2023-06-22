import React from 'react'
import { useParams } from 'react-router-dom'
import { useBooksContext } from '../context/BooksContext'

const BookDetails = () => {
    let { id } = useParams()
    let { books } = useBooksContext()
    let book = books.find(item => item.id == id)
    console.log(book)

    return (
        <div className='book-detail'>
            <img src={book.volumeInfo?.imageLinks?.thumbnail} />
            <div className='book-content'>
                <h2>{book.volumeInfo.title}</h2>
                <p className='desc'>{book?.volumeInfo?.description}</p>
                <p>published in {book.volumeInfo.publishedDate}</p>
                <p>Availability:{book.saleInfo.saleability}</p>
                <p className='author'>written by {book.volumeInfo.authors?.slice(0, 1)}</p>
            </div>



        </div>
    )
}

export default BookDetails