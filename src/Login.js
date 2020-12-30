
import React,{useState} from 'react';
import { auth } from './firebase';
import {  login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [name, setName] = useState('');

    const [profilepic, setProfilepic] = useState('');

    const dispatch = useDispatch();
    
    const register = ()=> {

        if(!name){
            return alert("Please enter a form name!!");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{

            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic,
            })
            .then(()=>{
                dispatch(
                    login({
                    
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilepic
                    })
                
            );

            })
        }).catch(error=> alert(error));
        
    };


    const loginApp = (e)=> {

        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)  
        .then((userAuth)=>{

            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileURL:userAuth.user.photoURL
              
            }))
        }).catch(error=>alert(error));
    }

    return (
        <div className="login">
            <img src="https://seeklogo.net/wp-content/uploads/2017/01/linkedin-logo-512x512.png" alt=""/>

            <form>

                <input value={name} onChange={e =>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>

                <input value={profilepic} onChange={e =>setProfilepic(e.target.value)} placeholder="Profile pic URL (optional)" type="text"/>

                <input value={email} onChange={e =>setEmail(e.target.value)}  placeholder="Email" type="email"/>
                <input value={password} onChange={e =>setPassword(e.target.value)} placeholder="Password" type="password"/>

                <button type="submit" onClick={loginApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login


