import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/Api/products/getallproducts')
      setProducts(res.data.data)
    } catch (err) {
      console.error('Error fetching products:', err)
    }
  }

  const [filters, setFilters] = useState({
    category: [],
    size: [],
    colors: [],
    price: []
  })

  const fetchFilteredProducts = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/products/filter', filters)
      setProducts(res.data.data)
    } catch (err) {
      console.error('Error fetching filtered products:', err)
    }
  }

  useEffect(() => {
    fetchFilteredProducts()
  }, [filters])


  return (
    <div className='w-full min-h-screen bg-black p-10'>
      <div className='grid grid-cols-[25%_74%] gap-4 p-3'>
        <Filter setFilters={setFilters}/>
        <div className='text-white grid grid-cols-4 gap-4 p-4'>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}

        </div>
      </div>
    </div>
  )
}

export default Home