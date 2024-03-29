import React ,{useState,useEffect}from 'react';
import { useAllProductQuery } from '../hooks/useGetProduct';
import ProductCard from '../components/ProductCard';
import { Container, Row ,Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import './ProductAll.css'
const ProductAll = () => {
  const [productList,setProductList]=useState([])
  const [query,setQuery]=useSearchParams();
  const {data}=useAllProductQuery()
  let searchQuery = query.get("q") || null

useEffect(()=>{},[])

  useEffect(()=>{

let lists=data?.data
if(lists && searchQuery){
  let filterLists = lists.filter((item)=>{
    let name = item.name.toLowerCase()
    return name.includes(searchQuery);
  })
 
  setProductList(filterLists)
}else{
  setProductList(data?.data)
}


  },[searchQuery,data])

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
