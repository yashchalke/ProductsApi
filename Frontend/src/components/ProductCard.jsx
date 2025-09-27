import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-60 h-75 border bg-white rounded-2xl p-3 flex flex-col gap-2'>
        <div className='border rounded-xl overflow-hidden'>
            <img src='CheckShirt.png' alt='Shirt image'/>
        </div>
        <div className='px-2 font-semibold flex justify-between'>
            <h1 className='text-black font-semibold'>Checked Shirt</h1>
            <h2 className='text-green-400'>Rs.4000</h2>
        </div>
        <button className='border flex items-center justify-center rounded-2xl bg-black text-white'>Add to Cart</button>
        


    </div>
  )
}

export default ProductCard