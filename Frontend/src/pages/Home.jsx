import React from 'react'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='w-full h-screen bg-black p-10'>
        <div className='grid grid-cols-[25%_74%] gap-4 p-3'>
            <div className=''>
        <Filter />
        </div>
        <div className='text-white grid grid-rows-none grid-cols-4 p-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </div>

        
    </div>
  )
}

export default Home