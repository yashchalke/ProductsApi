import React, { useState } from 'react'

const Filter = ({ setFilters }) => {
  const [localFilters, setLocalFilters] = useState({
    category: [],
    size: [],
    colors: [],
    price: []
  })

  const handleCheckbox = (type, value) => {
    setLocalFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value]
      return { ...prev, [type]: updated }
    })
  }

  const applyFilters = () => {
    setFilters(localFilters)
  }

  return (
    <div className='border border-white bg-gray-300 p-5 rounded-2xl'>
      <h1 className='text-black font-bold text-2xl pb-2 border-b-2 border-gray-400'>Filter</h1>

      {/* Category */}
      <h1 className='mt-2 font-semibold'>Category</h1>
      <div className='flex flex-col pb-2 border-b-2 border-gray-400'>
        {['shirts', 't-shirts', 'jeans', 'shorts'].map((cat) => (
          <label key={cat} className='flex items-center gap-2'>
            <input type="checkbox" onChange={() => handleCheckbox('category', cat)} />
            {cat}
          </label>
        ))}
      </div>

      {/* Size */}
      <h1 className='mt-2 font-semibold'>Size</h1>
      <div className='flex flex-col pb-2 border-b-2 border-gray-400'>
        {['small', 'medium', 'large', 'x-large'].map((size) => (
          <label key={size} className='flex gap-2'>
            <input type="checkbox" onChange={() => handleCheckbox('size', size)} />
            {size}
          </label>
        ))}
      </div>

      {/* Colors */}
      <h1 className='mt-2 font-semibold'>Colors</h1>
      <div className='flex flex-wrap p-2 justify-center gap-x-10 w-full h-[120px] border-b-2 border-gray-400'>
        {['black', 'white', 'yellow', 'purple', 'blue', 'green', 'red', 'pink'].map((color) => (
          <label key={color} className='cursor-pointer'>
            <input
              type='checkbox'
              value={color}
              onChange={() => handleCheckbox('colors', color)}
              className='hidden peer'
            />
            <div className={`border w-10 h-10 rounded-full bg-${color}-500 peer-checked:ring-4 peer-checked:ring-offset-2 peer-checked:ring-gray-600`}></div>
          </label>
        ))}
      </div>

      {/* Price */}
      <h1 className='mt-2 font-semibold'>Price Range</h1>
      <div className='flex flex-col gap-2 pb-3 border-b-2 border-gray-400'>
        {['under-500', '500-2000', '2000-5000', 'above-5000'].map((range) => (
          <label key={range} className='flex items-center gap-2'>
            <input type="checkbox" onChange={() => handleCheckbox('price', range)} />
            {range.replace('-', ' to ₹')}
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={applyFilters}
        className='mt-2 border w-full p-2 rounded-3xl bg-black text-white cursor-pointer hover:bg-white hover:text-black hover:font-semibold'
      >
        Apply Filter
      </button>
    </div>
  )
}

export default Filter