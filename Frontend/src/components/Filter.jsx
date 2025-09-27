import React from 'react'

const Filter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const selectedCategories = formData.getAll('category')
    const selectedSizes = formData.getAll('size')
    const selectedColors = formData.getAll('colors')
    const selectedPrices = formData.getAll('price')

    alert(`
      Selected Categories: ${selectedCategories.join(', ') || 'None'}
      Selected Sizes: ${selectedSizes.join(', ') || 'None'}
      Selected Colors: ${selectedColors.join(', ') || 'None'}
      Selected Price Ranges: ${selectedPrices.join(', ') || 'None'}
    `)

  }

  return (
    <div className='
  
    border
  border-white
    w-100
    h-180
  bg-gray-300
    p-5
    rounded-2xl '>
      <h1 className='
      text-black
      font-bold
      text-2xl
      pb-2
      border-b-2
      border-gray-400
      '>Filter</h1>
      <form onSubmit={handleSubmit}>
        
        <h1 className='mt-2 font-semibold'>Category</h1>
        <div className='flex flex-col pb-2 border-b-2 border-gray-400'>
        <label className='flex items-center gap-2'>
            <input type="checkbox" name="category" value="shirts" />
            Shirts
          </label>
          <label className='flex items-center gap-2'>
            <input type="checkbox" name="category" value="t-shirts" />
            T-Shirts
          </label>
          <label className='flex items-center gap-2'>
            <input type="checkbox" name="category" value="jeans" />
            Jeans
          </label>
          <label className='flex items-center gap-2'>
            <input type="checkbox" name="category" value="shorts" />
            Shorts
          </label>
        </div>
        <h1 className='mt-2 font-semibold'>Size</h1>
        <div className='flex flex-col pb-2 border-b-2 border-gray-400'>
          <label className='flex gap-2'>
            <input type='checkbox' name='size' value="small" />
            Small
          </label>
          <label className='flex gap-2'>
            <input type='checkbox' name='size' value="medium" />
            Medium
          </label>
          <label className='flex gap-2'>
            <input type='checkbox' name='size' value="large" />
            Large
          </label>
          <label className='flex gap-2'>
            <input type='checkbox' name='size' value="x-large" />
            X-Large
          </label>
        </div>
        <h1 className='mt-2 font-semibold'>Colors</h1>
        <div className='flex flex-wrap p-2 justify-center gap-x-10 w-full h-[120px] border-b-2 border-gray-400'>
  {[
    { name: 'black', color: 'bg-black' },
    { name: 'white', color: 'bg-white' },
    { name: 'yellow', color: 'bg-yellow-200' },
    { name: 'purple', color: 'bg-purple-400' },
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'green', color: 'bg-green-400' },
    { name: 'red', color: 'bg-red-500' },
    { name: 'pink', color: 'bg-pink-300' },
  ].map(({ name, color }) => (
    <label key={name} className='cursor-pointer'>
      <input
        type='checkbox'
        name='colors'
        value={name}
        className='hidden peer'
      />
      <div
        className={`border w-10 h-10 rounded-full ${color} peer-checked:ring-4 peer-checked:ring-offset-2 peer-checked:ring-gray-600`}
      ></div>
    </label>
  ))}
</div>
<h1 className='mt-2 font-semibold'>Price Range</h1>
<div className='flex flex-col gap-2 pb-3 border-b-2 border-gray-400'>
  <label className='flex items-center gap-2'>
    <input type="checkbox" name="price" value="under-500" />
    Under ₹500
  </label>
  <label className='flex items-center gap-2'>
    <input type="checkbox" name="price" value="1000-2000" />
    ₹1,000 – ₹2,000
  </label>
  <label className='flex items-center gap-2'>
    <input type="checkbox" name="price" value="2000-5000" />
    ₹2,000 – ₹5,000
  </label>
  <label className='flex items-center gap-2'>
    <input type="checkbox" name="price" value="above-5000" />
    Above ₹5,000
  </label>
</div>
<button className='mt-2 border w-full p-2 rounded-3xl bg-black text-white cursor-pointer hover:bg-white hover:text-black hover:font-semibold'
type='submit'
>Apply Filter</button>
      </form>
    </div>
  )
}

export default Filter