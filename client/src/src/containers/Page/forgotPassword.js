
import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { message } from 'antd';
import Input from '../../components/uielements/input';
import ForgotPasswordStyleWrapper from './forgotPassword.style';
import AuthContext from "../../context/authContext/authContext";

export default function ForgotPassword(props) {
  const {forgetRequest,error,serverMessage,success} = useContext(AuthContext);


  useEffect(()=>{
  // error message
  if(error && serverMessage){
    //show error message
    message.error(serverMessage)
  
  }
  // success send
  if(success && serverMessage){
     // show success message
     message.success(serverMessage);
  }
  })

  

const [email,setEmail]=useState('');
const onSubmit=e=>{
  e.preventDefault();
 forgetRequest({email});
 setEmail("")
  }


  return (
         <ForgotPasswordStyleWrapper className="isoForgotPassPage">
        <div className="isoFormContentWrapper">
          <div className="isoFormContent">
            <div className="isoLogoWrapper">
              <Link to="/">
                Back
              </Link>
            </div>

    
            <form onSubmit={e=>onSubmit(e)}>
            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
                <Input size="large" 
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                 />
              </div>

              <div className="isoInputWrapper">
              <button className="btn btn-info btn-block mb-2" type="submit">Send Request</button >
              </div>
            </div>
            </form>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
  )
}
