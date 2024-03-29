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


const searchByWord = (event) => {
  console.log(event.key); // 디버깅을 위해 어떤 키가 눌렸는지 출력
  if (event.key === "Enter") {
    event.preventDefault();
    let keyword = event.target.value;
    setSearch(keyword)
    console.log('keyword', keyword);
    // Enter 키 입력시 추가로 수행할 로직
  }
};



  const handleLogOut=(evt)=>{
    evt.preventDefault();
    if(evt.target.text === '로그아웃'){
      setLogIn(false)
      navigation('/')
    }else{
     
      navigation('/login')
    }
   
  }
 const goBack=()=>{
  const open=document.querySelector(".offcanvas-end")

  if(open !== null){
    console.log(open)
    open.setAttribute('class','none')
  
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
     

<Navbar  key={"sm"} expand={"sm"} className="bg-body-tertiary mb-3 menuList" style={{"backgroundColor":"white"}}>
          <Container  fluid>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"sm"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
              placement="end"
              
            >
             
              <Offcanvas.Body>
              <Button className='goBack' onClick={goBack}>Home</Button>
                <Nav className="menuList">
                {menuList.map((item,idx)=>(<Nav.Link key={idx}>{item}</Nav.Link>))}
                 
               
                </Nav>
                <Form   className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search!"
                    className="me-2 searchInput"
                    aria-label="Search"
                    onKeyDown={(event)=>searchByWord(event)}
                    
                  />
                  <Button className='searchBtn' variant="outline-danger">Search</Button>
                
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
