import React,{useEffect} from 'react';

import { useParams } from 'react-router-dom';
import { Container,Row,Col,Form} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { getProductDetail } from '../redux/actions/productAction';
import './ProductDetail.css'
const ProductDetail = () => {
  let {id}=useParams()
  
  const dispatch=useDispatch()
  const {productDetail}=useSelector(state=>state.product)

  let stock = productDetail?.stock ? Object.keys(productDetail.stock) : [];
useEffect(()=>{
dispatch(getProductDetail(id))
},[id])


 console.log(productDetail,'productDetail')

  return (
    <Container>
      <Row>
        <Col className='product_img'>
        <img width={400} src={productDetail?.image[0]}/>
        </Col>
        <Col>
       <div>{productDetail?.name}</div> 
       <div>${productDetail?.price}</div>
       <div>Description:{productDetail?.description}</div>
       <div>Category:{productDetail?.category.map(item=>(<p>{item}</p>))}</div>
       <Form.Select aria-label="Default select example">
      <option>Size</option>
      {
        stock?.length > 0?(
          stock?.map(item=>(
            <option>{item}-{productDetail[item] !== null?productDetail?.stock[item]:0}</option>
          ))
        ):""
      }
      
    </Form.Select>
    <button className='addBtn'>추가</button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
