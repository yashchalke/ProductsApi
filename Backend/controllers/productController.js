const Product = require('../db/models/Product')

const AddnewProductController = async (req, res) => {
  try {
    const { name, category, size, colors, price, image, description, inStock } = req.body

    const newproduct = new Product({
      name,
      category,
      size,
      colors,
      price,
      image,
      description,
      inStock,
    })

    await newproduct.save()

    res.status(201).json({
      success: true,
      message: 'Product Added Successfully',
      data: newproduct,
    })
  } catch (err) {
    console.log('Error occurred while creating new product:', err)
    res.status(400).json({
      success: false,
      message: 'Failed to add product',
    })
  }
}

const getAllProductsController = async (req, res) => {
  try {
    const getallproducts = await Product.find()
    if (getallproducts.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: getallproducts,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No products found',
      })
    }
  } catch (err) {
    console.log('Error fetching products:', err)
    res.status(500).json({
      success: false,
      message: 'Server error',
    })
  }
}

const filterController = async (req, res) => {
  try {
    const { category, size, colors, price } = req.body
    const query = []

    if (category && category.length > 0) {
      query.category = { $in: category }
    }

    if (size && size.length > 0) {
      query.size = { $in: size }
    }

    if (colors && colors.length > 0) {
      query.colors = { $in: colors }
    }

    let priceArray = []
    if (Array.isArray(price)) {
      priceArray = price
    } else if (typeof price === 'string') {
      priceArray = [price]
    }

    if (priceArray.length > 0) {
      const priceConditions = []

      priceArray.forEach((range) => {
        switch (range) {
          case 'under-500':
            priceConditions.push({ price: { $lt: 500 } })
            break
          case '500-2000':
            priceConditions.push({ price: { $gte: 500, $lte: 2000 } })
            break
          case '2000-5000':
            priceConditions.push({ price: { $gte: 2000, $lte: 5000 } })
            break
          case 'above-5000':
            priceConditions.push({ price: { $gt: 5000 } })
            break
        }
      })

      if (priceConditions.length > 0) {
        query.push({ $or: priceConditions })

      }
    }

    const products = await Product.find({$and: query})
    res.status(200).json({
      success: true,
      message: 'Filtered products fetched successfully',
      data: products,
    })
  } catch (err) {
    console.log('Error filtering products:', err)
    res.status(500).json({
      success: false,
      message: 'Error filtering products',
    })
  }
}

module.exports = {
  AddnewProductController,
  getAllProductsController,
  filterController,
}