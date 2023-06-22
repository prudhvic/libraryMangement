import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
let BooksContext = createContext()
export default function BooksContextProvider({ children }) {
    let localauth = JSON.parse(localStorage.getItem("user")) || null
    let [books, setBooks] = useState([])
    let [query, setQuery] = useState("java")
    let [sortVal, setSortVal] = useState("author")
    let [filterBooks, setFilterBooks] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [auth, setAuth] = useState(localauth)
    let fetchBooks = async (query) => {
        let key = "AIzaSyCoy3plWznRJpyQMvmdXcDFL-Ov0GWG1E0";
        key = import.meta.env.VITE_API_KEY
        setIsLoading(true)
        let url = `https://www.googleapis.com/books/v1/volumes?key=${key}`
        if (query) {

            url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
        }
        try {
            let response = await fetch(url)
            let data = await response.json()
            let items = [...data.items].sort((a, b) => a.volumeInfo.authors[0] > b.volumeInfo.authors[0] ? 1 : -1)
            if (data.items) {
                setIsLoading(false)

            }
            setBooks(data.items)
            setFilterBooks(items)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchBooks(query)
    }, [query])
    let searchQuery = (q) => {
        setQuery(q)
    }
    let handleSort = (e) => {
        setSortVal(e.target.value)
        let name = e.target.value;
        if (name == "title") {
            let items = [...books].sort((a, b) => a.volumeInfo.title > b.volumeInfo.title ? 1 : -1)
            setFilterBooks(items)
        }
        if (name === "publish_date") {
            let items = [...books].sort((a, b) => {
                let date1 = new Date(a.volumeInfo.publishedDate)
                let date2 = new Date(b.volumeInfo.publishedDate)
                return date1 - date2
            })
            setFilterBooks(items)
        }
        if (name == "author") {
            let items = [...books].sort((a, b) => a.volumeInfo.authors[0] > b.volumeInfo.authors[0] ? 1 : -1)
            setFilterBooks(items)
        }
    }

    return (
        <BooksContext.Provider value={{ books: filterBooks, searchQuery, sortVal, handleSort, isLoading, auth, setAuth, fetchBooks }}>
            {children}
        </BooksContext.Provider>
    )
}
export let useBooksContext = () => useContext(BooksContext)