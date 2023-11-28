import axios from 'axios'
import React,{useContext,useState,useEffect} from "react";
const AuthContext=React.createContext(null)
const AuthProvider=(props)=>{
    const [user,setUser]=useState(null)
    const [userlist,setUserlist]=useState([])
    const signup=(email,password,firstName,lastName)=>{
        axios.post('http://localhost:3000/users',{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }
    const login=(user)=>{
        setUser(user)
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>{
            setUserlist(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const logout=()=>{
        setUser(null)
    }
    return <AuthContext.Provider value={{user,login,logout,signup,userlist}}>
        {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export{AuthProvider,useAuth}