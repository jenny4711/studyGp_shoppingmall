import React from 'react';
import { Person ,Search} from 'react-bootstrap-icons';
import { useNavigate ,Link} from 'react-router-dom';
import './NavBar.css'
import { menuList } from '../utils/menus';
import Login from '../pages/Login';
const NavBar = ({logIn,setLogIn}) => {
  const navigation=useNavigate()
  const handleLogOut=(evt)=>{
    evt.preventDefault();
    if(evt.target.text === '로그아웃'){
      setLogIn(false)
      navigation('/login')
    }else{
     
      navigation('/login')
    }
   
  }
 
  return (
    <div>
    {/* ------------------------------- */}
      <div>
        <div  className='loginIcon'>
      <Person size={30}/>
     <Link onClick={(evt)=>handleLogOut(evt)} className='loginBtn' to='/login'>{!logIn?'로그인':'로그아웃'}</Link>
      </div>
      </div>

{/* ---------------------------------------------------- */}
      <div className='NavBar'>
       <Link to='/'><img width={200}  src='https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg'/></Link> 
      </div>
{/* ------------------------------------------------------- */}
      <div className={!logIn?'none':'menuArea'}>
        
          <ul className='menuList'>
          {menuList.map(item=>(<li>{item}</li>))}
          </ul>
        
        <div className='searchSec'>
          <Search size={20}/>
          <input className='input' type='text'/>
        </div>
      </div>
     {/* ---------------------------------------------------------- */}
    </div>
  );
}

export default NavBar;
