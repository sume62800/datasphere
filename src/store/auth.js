import React, { useContext, useState, useEffect } from "react";

export const AuthContext = React.createContext()

export const AuthProvider=({children})=>{

    const[token,setToken]=useState(localStorage.getItem('token'))
    const[data,setData]=useState('')
    console.log(data)

    const StoreTokenInLS=(servertoken)=>{
        setToken(servertoken)
        return localStorage.setItem('token',servertoken)
    }

    let IsLogin=!!token;
    


    const Logoutuser=()=>{
        setToken('')
        return localStorage.removeItem('token')

    }

    // jwt Authencation

    const useAuthentication= async()=>{
       try {
        const response= await fetch('http://localhost:8000/user',{
            method:'GET',
            headers:{
                Authorization:token
            }
        })
        if (response.ok){
            let res= await response.json()
            setData(res)
            console.log(res)
        }
       } catch (error) {
        console.log('error from useauthentication',error)
        
       }
    }


    useEffect(()=>{
        useAuthentication()
    }
       
    ,[]);
    

    return ( <AuthContext.Provider value={{StoreTokenInLS,Logoutuser,IsLogin,data}}>
        {children}
    </AuthContext.Provider> )
}

export const useAuth=()=>{
    const AuthContextValue=useContext(AuthContext)
    if (!AuthContextValue){
        throw new Error("useAuth used outside the provider")
    }
    else{
        return  AuthContextValue
    }
    
}