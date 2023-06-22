import { useEffect, useRef, useState } from 'react'
import { useBooksContext } from '../context/BooksContext'
import { AiOutlineSearch } from "react-icons/ai";
import Sort from './Sort';

const Search = () => {
    let [searchVal, setSearchVal] = useState("")
    let { searchQuery } = useBooksContext()
    let ref = useRef()
    let submitHandler = (e) => {
        e.preventDefault()
        console.log(1)
        searchQuery(searchVal)
        setSearchVal("")


    }
    useEffect(() => {
        ref.current.focus()
    }, [])

    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='search-form'>
                <input type='text' ref={ref} onChange={(e) => setSearchVal(e.target.value)} value={searchVal} placeholder='search books...' />

                <button className='btn'><AiOutlineSearch /></button>
            </form>
            <Sort />
        </div>

    )
}

export default Search