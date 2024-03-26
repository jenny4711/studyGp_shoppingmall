import{Routes,Route} from 'react-router-dom'
import './App.css';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import NavBar from './components/NavBar';
//1.전체 상품페이지, 로인, 상품상세 페이지
//1-1 navigation bar
//2.전체 상품페이지에서는 전체 상품을 볼수있다
//3.로그인 버튼 을 누르면 로그인페이지가 나온다
//4.로그인이 되어있을 경우에는 상품 디테일 페이지를 볼수있다
//5.로그아웃 버튼을 ㄹ클릭하면 로그아웃이 된다
//6.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//7.상품을 검색할수있다

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
