import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import {useSelector} from "react-redux";
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Widgets from './Widgets';

function App() {

   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
     
    auth.onAuthStateChanged(userAuth =>{

      if(userAuth){

        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoURL:userAuth.photoURL
        }))

      }else{

        dispatch(logout());

      }
    })

   }, [])

  return (
    <div className="app">
      
      <Header />

      {!user ?( <Login />) :(

         <div className="app_body">

         <Sidebar />
 
         <Feed />

         <Widgets />
          
       </div>
      ) 
      
      }
      
     
    </div>
  );
}

export default App;
