import React ,{useState,useEffect}from 'react';

import ProductCard from '../components/ProductCard';
import { Container, Row ,Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getProductAll } from '../redux/actions/productAction';
import './ProductAll.css'
const ProductAll = () => {
  const dispatch=useDispatch()
  const [productList,setProductList]=useState([])
  const [query,setQuery]=useSearchParams();
  const {products} = useSelector(state=>state.product)
  
  let searchQuery = query.get("q") || null

useEffect(()=>{
dispatch(getProductAll())
},[])
console.log(products,'result')
  useEffect(()=>{
console.log(searchQuery,'searchQuery')

if(products && searchQuery){
  let filterLists = products?.filter((item)=>{
    let name = item.name.toLowerCase()
    return name.includes(searchQuery);
  })
 
  setProductList(filterLists)
}else{
  setProductList(products)
}

  },[searchQuery,products])

  return (
    <div className='ProductAll'>
      <Container className='ProductAll_Container'>
      <Row>
        {productList?.map((menu)=>(
   <Col className='ProductAll_Col' lg={3}>
<ProductCard item={menu}/>
   </Col>
        ))}
       
       
          
        </Row>
      </Container>
     <ProductCard/>
    </div>
  );
}

export default ProductAll;
