import React ,{useState,useEffect}from 'react';
import { useAllProductQuery } from '../hooks/useGetProduct';
import ProductCard from '../components/ProductCard';
import { Container, Row ,Col} from 'react-bootstrap';
import './ProductAll.css'
const ProductAll = () => {
  const [productList,setProductList]=useState([])
  const {data}=useAllProductQuery()
  console.log(data?.data)
  useEffect(()=>{
setProductList(data?.data)
  },[data])
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
