import React ,{useState}from 'react';
import {  useNavigate } from 'react-router-dom';
import './Login.css'
const Login = ({logIn,setLogIn}) => {
const [username,setUsername]=useState("")
const [pw,setPw]=useState("")
const[notice,setNotice]=useState("")
const navigate = useNavigate()
const handleLogin=(e)=>{
  setNotice("")
e.preventDefault();
if(username === 'jenny' && pw === '1234'){
  setLogIn(true)
  navigate('/')
}else{
setNotice("Wrong Password or Username.Please try again!")
}
}
  return (
    <div className='Login'>
      <h3 className='Login_notice'>{notice}</h3>
     <form onSubmit={(e)=>handleLogin(e)}  className='login-form'>
      <label htmlFor="username">Username</label>
      <input className='login_input' type="text" name="username" onChange={(event)=>setUsername(event.target.value)}/>

      <label htmlFor="password">Password</label>
      <input className='login_input' type="password" name="password" onChange={(event)=>setPw(event.target.value)}/>
     <button className='loginSec-btn'>Submit</button>
     
    </form>
    </div>
  );
}

export default Login;
