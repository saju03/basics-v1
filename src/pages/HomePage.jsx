import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

import Shimmer from '../components/Shimmer'
import useFetchData from '../Utils/useFetchData'

export default function HomePage() {

const products = useFetchData()
  return products ? (
    <div className='flex flex-wrap p-11'>
      {products.map((item, index) => {
       return <ProductCard product={item} key={`product${index}`} />

      })}

    </div>
  ) : <Shimmer />
}
