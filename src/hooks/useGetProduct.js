
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

const getAllList  = async()=>{
  let url='https://studygp-shoppingmallbk.onrender.com/api/product'
  return await axios.get(url)
}

export const useAllProductQuery=()=>{
  return useQuery({
    queryKey:['allProduct'],
    queryFn:()=>getAllList(),
    retry:1,
    select:(data)=>{
      return data.data
    }


  })
}