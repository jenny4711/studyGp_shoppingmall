import React,{useEffect,useState} from 'react';
import { useDetailProductQuery } from '../hooks/useGetProduct';
import { useParams } from 'react-router-dom';
import { Container,Row,Col,Form} from 'react-bootstrap';

import './ProductDetail.css'
const ProductDetail = () => {
  let {id}=useParams()
  const {data}=useDetailProductQuery(id)
  let list = data?.data
  let stock = list?.stock ? Object.keys(list.stock) : [];

  if (!data || !list) {
    return <div>No stock</div>
  }

  return (
    <Container>
      <Row>
        <Col className='product_img'>
        <img width={400} src={data?.data.image[0]}/>
        </Col>
        <Col>
       <div>{data?.data.name}</div> 
       <div>${data?.data.price}</div>
       <div>Description:{data?.data.description}</div>
       <div>Category:{data?.data.category.map(item=>(<p>{item}</p>))}</div>
       <Form.Select aria-label="Default select example">
      <option>Size</option>
      {
        stock?.length > 0?(
          stock?.map(item=>(
            <option>{item}-{list[item] !== null?list.stock[item]:0}</option>
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
