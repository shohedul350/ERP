import React,{useState,useContext} from 'react'
import { message } from 'antd';
import AuthContext from "../../context/authContext/authContext";



 const AddUser = (props) => {

const {registerAuth,error,serverMessage,success} = useContext(AuthContext);



// error message
if(error && serverMessage){
  //show error message
  console.log(serverMessage)
  message.error(serverMessage)

}
// success aded 
if(success && serverMessage){
 // show success message
 message.success(serverMessage);
}





    

    const [formData,setFormData]=useState({
         userName:"",
         email:"",
         role:"",
         password:"",
         password2:""
      });
 const {userName,email,role,password,password2}=formData

const onSubmit=e=>{
  e.preventDefault();
  if (password !== password2)  {
    return  message.error("password don't match")
   }

  registerAuth({ userName,email,role, password });

}

const onChange=e=>{
setFormData({...formData,[e.target.name]:e.target.value})

}
    return (
      <div className="card m-4">

    <div className="row p-5">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-6">Register Here</h1>
          <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name"> Name: </label>
              <input
                type="text"
                className="form-control shadow"
                placeholder="Enter here"
                name="userName"
                value={userName}
                onChange={e=> onChange(e)}
                required
              />
        
            </div>
            <div className="form-group">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                className="form-control m-3 shadow"
                placeholder="Enter here"
                name="email"
                value={email}
                onChange={e=> onChange(e)}
                required
              />
             
            </div>
            <div className="form-group">
            <label htmlFor="role"> Role: </label>
            <div className="input-group ">
       
            <select className="custom-select shadow"
             name="role"
             value={role}
             required
             onChange={e=> onChange(e)}
            >
                <option selected>Choose...</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>

            </select>
            <div className="input-group-append">
                <label className="input-group-text" for="inputGroupSelect02">Options</label>
            </div>
  </div>
  </div>

            <div className="form-group">
              <label htmlFor="password" className="m-1"> Password: </label>
              <input
                type="password"
                className="form-control m-3 shadow"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={e=> onChange(e)}
                required
              
              />
            </div>

            <div className="form-group">
              <label htmlFor="password2" className="m"> Confrim Password: </label>
              <input
                type="password"
                className="form-control m-3 shadow"
                placeholder="Enter Your Password"
                name="password2"
                value={password2}
                onChange={e=> onChange(e)}
                required
              
              />
            </div>
          
        

            <button className="btn btn-primary my-3 d-block">Register</button>
          </form>
        </div>
      </div>
      </div>

    )
}

export default AddUser