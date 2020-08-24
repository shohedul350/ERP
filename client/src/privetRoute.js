import React,{useContext} from 'react'
import  AuthContext from './context/authContext/authContext'
import {Route,Redirect} from 'react-router-dom'

const PrivatetRoute=({component: Component, ...rest})=>{
    const {auth}=useContext(AuthContext)
    return(
   <Route
   {...rest}
   render={props=> !auth ? (<Redirect to='/signin'/>) : (<Component {...props} />)}
   
   />
    )
    
}

export default PrivatetRoute