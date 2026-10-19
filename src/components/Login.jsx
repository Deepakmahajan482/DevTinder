import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addUser } from '../utils/UserSlice';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [EmailId, setEmailId] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogin=async()=>{
    try{
  //   const response=await axios.post(`http://localhost:3000/login`,{
  //     EmailId,
  //     Password
  //   },
  // {
  //   withCredentials:true
  // })
  //   const data=await  response.data;
  
  //     console.log(data.message);
  setLoading(true);
 await new Promise((resolve) => setTimeout(resolve, 1000));
  const data={
  about: "Software Engineer by profession and a Teacher by heart.",
  age: 30,
  createdAt: "2024-09-13T08:37:36.787Z",
  emailId: "akshaysaini1@gmail.com",
  firstName: "Akshay",
  gender: "male",
  lastName: "Saini",
  password: "$2b$10$...",
  photoUrl: "https://akshaysaini.in/img/akshay.jpg",
  skills: ["javascript", "react", "node"],
  updatedAt: "2024-09-20T16:41:57.863Z",
  __v: 2,
  _id: "66e3f9d04c1374cebe15691d"
};
   dispatch(addUser(data));
   navigate('/');
  }
  catch(err){
    console.error(err);
  }
  finally{
    setLoading(false);
  }
  }

  return (
    Loading==true?<Loader/>:
     <div className='flex justify-center'>
   <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login Page</h2>
<fieldset className="fieldset">
  <label className="label" htmlFor="name">Email Id</label>
  <input type="email" id="name" value={EmailId} onChange={(e)=>{setEmailId(e.target.value)}} className="input" placeholder="Email" />
</fieldset>
<fieldset className="fieldset">
  <label className="label" htmlFor="name">Password</label>
   {/* binding the password with ui component */}
  <input type="text" id="name" className="input" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
</fieldset>
      <button onClick={()=>{handleLogin()}} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
  )
}

export default Login