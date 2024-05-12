import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchProductDetails(productId){
const [productDetails,setProductDetails] = useState(null)
const fetchPoductDetails = async ()=>{
    const {data} = await axios.get('https://dummyjson.com/products/'+ productId);
    setProductDetails(data)

}

useEffect(()=>{
    fetchPoductDetails();

},[])
return productDetails
}