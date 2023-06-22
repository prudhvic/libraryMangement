import { useEffect } from 'react'
import { useBooksContext } from '../context/BooksContext'
import Book from './Book'
import Search from './Search'
import { useNavigate } from 'react-router-dom'

const Books = () => {
    let { books, isLoading, auth } = useBooksContext()
    let navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            navigate("/")
        }
    }, [auth])
    
    return (
        <>
            <Search />
            {!isLoading ? <div className='books-container'>{
                books.map((book) => <Book book={book} key={book.id} />)
            }</div> : (<span className="loader"></span>)}
        </>

    )
}

export default Books