import React, { createContext, useEffect, useState } from 'react'

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showLogin, setShowLogin] = useState(true);
    useEffect(() => {
        if(isAuthenticated===true){
            
        }
    }, [isAuthenticated])
    return (
        <UserAuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            showLogin,
            setShowLogin
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}