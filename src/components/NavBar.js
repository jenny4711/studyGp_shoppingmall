import React from 'react';
import { Person ,Search} from 'react-bootstrap-icons';

import './NavBar.css'
import { menuList } from '../utils/menus';

const NavBar = () => {
  return (
    <div>
    {/* ------------------------------- */}
      <div>
        <div className='loginIcon'>
      <Person size={30}/>
      로그인
      </div>
      </div>

{/* ---------------------------------------------------- */}
      <div className='NavBar'>
        <img width={200}  src='https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg'/>
      </div>
{/* ------------------------------------------------------- */}
      <div className='menuArea'>
        
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
