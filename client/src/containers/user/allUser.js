import React,{useContext,useEffect} from 'react'
import { Popconfirm, message } from 'antd';
import AuthContext from '../../context/authContext/authContext'

export default function Alluser() {
const {getAllAuth,allAuth,deleteAuth, success} = useContext(AuthContext);

useEffect(()=>{
  getAllAuth();
//eslint disable nextline
},[]);

function confirm(id) {
  deleteAuth(id);
  if(success){
    message.success('Delete Successfull');
  }

}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
    return (
        <div className="card m-4" >
            
    <table className="table table-sm">
    <thead>
      <tr>
      <th scope="col">Serial</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Possion</th>
      <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    {
             !allAuth.length? (
              <div className="container d-flex justify-content-center p-4">
              <div className="spinner-border m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            
              <p className="pl-1">Loading...</p> 
            
            </div>
       
             ) : (
               
              allAuth.map((auth,index)=>(
               
                <tr>
                <td className="">{index+1}</td>
               <td className="">{auth.userName}</td>
               <td className="">{auth.email}</td>
               <td className="">{auth.role}</td>
               <td className="">
               <Popconfirm
                 title="Are you sure delete this task?"
                 onConfirm={()=>confirm(auth._id)}
                 onCancel={cancel}
                 okText="Yes"
                 cancelText="No"
               >
               <span><i className="fas fa-trash-alt"></i></span>
               </Popconfirm>

               </td>
          </tr>
                )
              )
             )
           }

    </tbody>
  </table>
        </div>
    )
}

