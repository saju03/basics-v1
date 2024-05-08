import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import Shimmer from '../components/Shimmer'

export default function HomePage() {
  const [products, setProducts] = useState(null)
  const fetchApiData = async function () {
    const { data } = await axios.get('https://dummyjson.com/products')
    setProducts(data.products)
  }

  useEffect(() => {
    fetchApiData()
  }, [])


  return products ? (
    <div className='flex flex-wrap p-11'>
      {products.map((item, index) => {
       return <ProductCard />

      })}

    </div>
  ) : <Shimmer />
}
