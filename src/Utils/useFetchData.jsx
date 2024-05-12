import { useEffect, useState } from "react"
import axios from 'axios'
export default function useFetchData() {
    const [products, setProducts] = useState(null)
    const fetchApiData = async function () {
        const { data } = await axios.get('https://dummyjson.com/products')
        setProducts(data.products)
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return products

}