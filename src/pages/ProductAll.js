import React ,{useState,useEffect}from 'react';
import { useAllProductQuery } from '../hooks/useGetProduct';
import ProductCard from '../components/ProductCard';
const ProductAll = () => {
  const [productList,setProductList]=useState([])
  const {data}=useAllProductQuery()
  console.log(data?.data)
  useEffect(()=>{
setProductList(data?.data)
  },[])
  return (
    <div>
     <ProductCard/>
    </div>
  );
}

export default ProductAll;
