import React ,{useState,useEffect}from 'react';
import { Person ,Search} from 'react-bootstrap-icons';
import { useNavigate ,Link} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './NavBar.css'
import { menuList } from '../utils/menus';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from '../pages/Login';
const NavBar = ({logIn,setLogIn}) => {
  const navigation=useNavigate()
  const [search,setSearch]=useState("")
  const [query,setQuery]=useSearchParams();

useEffect(()=>{
  if(search){
    setQuery({q:search})
  }else{
    setQuery()
  }

},[search])


  const handleLogOut=(evt)=>{
    evt.preventDefault();
    if(evt.target.text === '로그아웃'){
      setLogIn(false)
      navigation('/')
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
      {/* <div className={!logIn?'none':'menuArea'}>
        
          <ul className='menuList'>
          {menuList.map(item=>(<li>{item}</li>))}
          </ul>
        
        <div className='searchSec'>
          <Search size={20}/>
          <input  className='input' type='text' onChange={(evt)=>setSearch(evt.target.value)} placeholder='Search'/>
        </div>
      </div> */}

<Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3 menuList" style={{"backgroundColor":"white"}}>
          <Container  fluid>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
             
              <Offcanvas.Body>
                <Nav className="menuList">
                {menuList.map(item=>(<Nav.Link>{item}</Nav.Link>))}
                 
               
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 searchInput"
                    aria-label="Search"
                    onChange={(evt)=>setSearch(evt.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>





     {/* ---------------------------------------------------------- */}
    </div>
  );
}

export default NavBar;
