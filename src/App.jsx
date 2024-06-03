/* eslint-disable no-unused-vars */
import conf from './conf/conf'
import './App.css'
import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';
import authService from './appwrite/auth'
import { login ,logout } from './store/authSlice';
import { Header , Footer   } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() =>{
      authService.getCurrentUser()
      .then((userData) =>{
          if(userData){
            dispatch(login(userData));
          }else{
            dispatch(logout)(userData)
          }
      })
      .finally(() =>{ setLoading(false)});
  },[])


            

   return !loading ?  <div className='min-h-screen flex flex-wrap content-between bg-gray-400 text-center'> 
   <div className='w-full block' >
      <Header/>
        <main>
          TODO:  <Outlet/>
        </main>
      <Footer/>
   </div>
   </div> :(null) ;
}

export default App
