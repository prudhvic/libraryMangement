import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import BookDetails from './components/BookDetails'
import Books from './components/Books'
import GoggleSignIn from './components/GoggleSignIn'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { useBooksContext } from './context/BooksContext'
import Home from './components/Home'
function App() {
  let { auth } = useBooksContext()
  let navigate = useNavigate()
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={auth ? <Books /> : navigate("/")} />
        <Route path='/books/:id' element={<BookDetails />} />
      </Routes>
    </main>
  )
}

export default App
