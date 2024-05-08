import React from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
    const {seller} = useParams()
    console.log(seller);
  return (
    <div>ProductDetails</div>
  )
}
