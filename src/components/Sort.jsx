import React from 'react'
import { useBooksContext } from '../context/BooksContext'

const Sort = () => {
    let { sortVal, handleSort } = useBooksContext()

    return (
        <div className='select-box'>
            <p>sort</p>
            <select value={sortVal} onChange={handleSort}>
                <option value="author">author</option>
                <option value="title">title</option>
                <option value="publish_date">publish date</option>

            </select>
        </div>



    )
}

export default Sort