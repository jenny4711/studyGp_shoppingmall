import React ,{useState,useEffect}from 'react';
import {  useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/userAction';
import { useDispatch,useSelector } from 'react-redux';
import './Login.css'
const Login = ({username,pw,setUsername,setPw,logIn,setLogIn}) => {
const dispatch=useDispatch()
const[notice,setNotice]=useState("")
const navigate = useNavigate()
const {error,user} = useSelector(state=>state.user)
console.log(user,'uer')
useEffect(()=>{
  dispatch(login({username,pw}))
},[username,pw])

const handleLogin=(e)=>{
  e.preventDefault();
  if(user !== null){
    setLogIn(true)
    navigate('/')
  }else{
    setLogIn(false)
    setNotice(error)
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
