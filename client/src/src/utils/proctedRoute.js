import React,{useContext} from 'react'
import  AuthContext from '../context/authContext/authContext'
import {Route,Redirect} from 'react-router-dom'

const proctedRoute=({component: Component, ...rest})=>{
    const {auth}=useContext(AuthContext)
    return(
   <Route
   {...rest}
   render={props=> !auth ? (<Redirect to='/500'/>) : (<Component {...props} />)}
   
   />
    )
    
}

export default proctedRoute