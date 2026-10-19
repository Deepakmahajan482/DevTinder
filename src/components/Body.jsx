import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetching=async(result)=>{
    try{
     
      if(result){
         if(userData)return ;
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
        
    }
    else {
      throw new Error("User authentication failed");
    }
    
    
    }
    catch(err){
      dispatch(removeUser());
      navigate('/login',{replace:true});
    }
  }
  useEffect(()=>{
    fetching(true);
  },[]);
  return (
    <div className="min-h-screen flex flex-col">
    <NavBar fetching={fetching}/>
    <main className='flex-1 flex items-center justify-center'>
    <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Body