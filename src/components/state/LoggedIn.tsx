import { useState } from 'react'
export const LoggedIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLogin = () => {
        setisLoggedIn(true)

    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>login</button>
            <div>User is {isLoggedIn ?'logged IN':'Logged out'}</div>


        </div>
    )
}
//type Inference 
//when the initial value is known at a future point 