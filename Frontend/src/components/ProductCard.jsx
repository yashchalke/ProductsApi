import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='w-60 h-75 border bg-white rounded-2xl p-3 flex flex-col gap-2'>
      <div className='border rounded-xl overflow-hidden'>
        <img src={product.image} alt={product.title} className='w-full h-50 object-cover' />
      </div>
      <div className='px-2 font-semibold flex justify-between'>
        <h1 className='text-black font-semibold'>{product.name}</h1>
        <h2 className='text-green-400'>Rs.{product.price}</h2>
      </div>
      <button className='border flex items-center justify-center rounded-2xl bg-black text-white py-2'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard