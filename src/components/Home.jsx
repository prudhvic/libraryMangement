import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBooksContext } from '../context/BooksContext'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
    let { auth } = useBooksContext()
    let navigate = useNavigate()
    let handleAuth = () => {
        if (auth) {
            navigate("/books")

        } else {
            alert("please signup first")
            navigate("/")
        }
    }
    // // useEffect(() => {
    // //     if (auth) {
    // //         navigate("/books")
    // //     }
    // // }, [auth])
    return (
        <div className='home'>
            <img src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60' />
            <div>
                <h2>Literature, knowledge.</h2>
                <p>A digital library provides access to a vast array of information and resources, revolutionizing the way we explore and interact with knowledge.</p>
                <button onClick={handleAuth} className='btn explore'>Explore Books<BsFillArrowRightCircleFill /></button>
            </div>
        </div>
    )
}

export default Home