import React from 'react'
import {useState,useEffect} from 'react';
import './Login.scss'
import image1 from '../../Assets/image1.svg';
import axios from 'axios'
import  {Link} from 'react-router-dom'
function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    //this is equivalent to document.ready
    useEffect(()=>{
        if(localStorage.getItem("email") != null){
            window.location.href = "/dashboard"
        }
    },[])
    const validateForm = () =>{
        if(email.length == 0 || password.length == 0){
            return false;
        }
        return true;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            email : email,
            password: password
        }
        if(validateForm()){
            axios.post('http://localhost:4000/app/login',data)
            .then((res)=>{
                console.log(res);
                console.log('success');
                localStorage.setItem("email",res.data.email);
                if(res.data.email != null)
                window.location.href="/dashboard";
                setError('Invalid Credentials');
            })
            .catch((err)=>{
                console.log('error');
                console.log(err);
            })
        }
        else{
            setError('Please fill out all the fields');
        }
    }
  return (
    <div className='login-container'>
        <div className='login-left'>
            <h2>Find a vet for your pet.</h2>
            <img className='login-image' src="https://i0.wp.com/ideasfornames.com/wp-content/uploads/2019/12/shutterstock_777196288.jpg?fit=1000%2C667&ssl=1" alt="image"/>
        </div>
        <div className='login-right'>
        <h2>Log In To Cure</h2>
            <form className='login-form'>
                <input className='form-control' required="required" onChange={(e)=>setEmail(e.target.value)} placeholder='email' value={email} type="email"/>
                <input className='form-control' required="required" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password} type="password"/>
                <button type="submit" onClick={e=>handleSubmit(e)} className='submit-btn'>Login</button> 
                <span>New user? <Link style={{textDecoration:'none',color:'#3f3f3f'}} to ="/signup">Sign up</Link></span>
                {error && <p className='error-div'>{error}</p>}
            </form>
        </div>
    </div>
  )
}

export default Login