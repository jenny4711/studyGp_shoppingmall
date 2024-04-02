import { productActions } from '../reducers/productReducer';
import axios from 'axios';
export const getProductAll=()=>async(dispatch)=>{
  try{
    dispatch(productActions.getAllRequest())
    let url='https://studygp-shoppingmallbk.onrender.com/api/product'
    const res = await axios.get(url)
    console.log(res.data.data,'res')
     if(res.status !==200)throw new Error(res.error)
     dispatch(productActions.getProductAll(res.data.data))
  }catch(error){
    console.log(error,'getProductAll')
    dispatch(productActions.getError(error))
  }
}

export const getProductDetail=(id)=>async(dispatch)=>{
  try{
    dispatch(productActions.getAllRequest())
    let url=`https://studygp-shoppingmallbk.onrender.com/api/product/${id}`
    const res = await axios.get(url)
    if(res.status !== 200)throw new Error(res.error)
    console.log(res.data.data,'res.data')
    dispatch(productActions.getProductDetail(res.data.data))
  }catch(error){
console.log(error,'getProductDetail')
dispatch(productActions.getError(error))
  }
}
