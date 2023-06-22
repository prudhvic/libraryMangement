import { useAuth0 } from '@auth0/auth0-react'
import { FcGoogle } from "react-icons/fc";
import { useEffect } from 'react';
import { useBooksContext } from '../context/BooksContext';
import { GoSignOut } from "react-icons/go";
const GoggleSignIn = (e) => {
    let { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
    let { setAuth, auth } = useBooksContext()
    let signIn = async () => {
        console.log("auth")
        await loginWithRedirect()

        console.log("after auth")
    }
    let signout = async () => {
        await logout({ logoutParams: { returnTo: window.location.origin } })
        localStorage.removeItem("user")
        setAuth("")
    }
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem("user", JSON.stringify(user))
            setAuth(user)
            console.log(user)
        }
    }, [isAuthenticated, user])
    return (
        <div className='actions'>

            {!auth && <button onClick={signIn}>SignUp <FcGoogle /></button>}
            {auth && <button onClick={signout}>signOut<GoSignOut /></button>}
        </div>
    )
}

export default GoggleSignIn