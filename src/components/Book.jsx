import { Link } from "react-router-dom";

const Book = ({ book }) => {
    if (!(book.volumeInfo.imageLinks)) {
        return;
    }
    return (
        <Link to={`/books/${book.id}`}>
            <img src={book.volumeInfo?.imageLinks?.thumbnail} />
            <div className='book-content'>
                <h2>{book.volumeInfo.title}</h2>

                <p>published in {book.volumeInfo.publishedDate}</p>
                <p>Availability:{book.saleInfo.saleability}</p>
                <p className='author'>written by {book.volumeInfo.authors?.slice(0, 1)}</p>
            </div>

        </Link>
    )
}

export default Book