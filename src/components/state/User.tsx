import { useState } from 'react'
type AuthUser={
    name : string,
    email :string
}
export const User = () => {
    //telling typescript value can be null or as in Authuser
// const [user,setUser]=useState <AuthUser |null >(null)
const [user,setUser]=useState <AuthUser >({}as AuthUser)

    const handleLogin = () => {
        setUser({
            name :'Carol',
            email:'carolchep@gmail.com'
        }
        )
    }
    // const handleLogout = () => {
    //     setUser(null)

    // }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>login</button> */}
            <h1>user name is{user.name}</h1>
            <h2>user name is </h2>

        </div>
    )
}
//type Inference 
//when the initial value is known at a future point 