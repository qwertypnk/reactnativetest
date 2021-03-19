import React,{createContext, useState} from 'react';

export const LoginContext = createContext()

const LoginProvider = ({children}) =>{
    const [userLoggedIn,setUserLoggedIn]=useState(false)
    return (
        <LoginContext.Provider value={{
            setUserLoggedIn,
            userLoggedIn
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider