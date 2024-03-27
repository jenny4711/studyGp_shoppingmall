import React from 'react';
import './Product.css'
import { useNavigate } from 'react-router-dom';
const ProductCard = ({item}) => {
  const navigate=useNavigate()
  const showDetail=()=>{
navigate(`/product/${item._id}`)
  }
  return (
    <div className='ProductCard' onClick={showDetail}>
      <img className='ProductCard_img'  src={item?.image[0]}/>
      <div>{item?.category.includes("kids-all")?"Conscious choice":""}</div>
      <div>{item?.name}</div>
      <div>${item?.price}</div>
      <div>{item?.category.length <3 ?"신제품":""}</div>
      
    </div>
  );
}

export default ProductCard;
