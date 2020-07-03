import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Product } from '../types.ts'

let products: Product[] = [
  {
    id: '1',
    name: 'Deno One',
    price: 100.05
  },
  {
    id: '2',
    name: 'Deno Two',
    price: 100
  },
  {
    id: '3',
    name: 'Deno Three',
    price: 1045.5
  },
  {
    id: '4',
    name: 'Deno Four',
    price: 85.5
  },
]


// @desc  Get all products
// @route Get /api/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products
  }
}

// @desc  Get single products
// @route Get /api/products/:id
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
  const product: Product | undefined = products.find(p => p.id === params.id)

  if (product) {
    response.status = 200
    response.body = {
      success: true,
      data: products.find(p => p.id === params.id)
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: 'No product'
    }
  }
}

// @desc  Add single products
// @route Post /api/products
const addProduct = async ({ request, response }: { request: any, response: any }) => {
  const body = await request.body()

  if (!request.hasBody) {
    response.states = 404
    response.body = {
      success: false,
      msg: 'No data'
    }
  } else {
    const product: Product = body.value
    product.id = v4.generate()
    products.push(product)
    response.states = 200
    response.body = {
      success: true,
      data: product
    }
  }
}

// @desc  Update product
// @route Put /api/products/:id
const updateProduct = async ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
  const product: Product | undefined = products.find(p => p.id === params.id)

  if (product) {
    const body = await request.body()
    const updateData: { name?: string, price?: number } = body.value
    products = products.map(p => p.id === params.id ? { ...p, ...updateData } : p)
    response.states = 200
    response.body = {
      success: true,
      data: products
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: 'No product found'
    }
  }
}

export { getProducts, getProduct, addProduct, updateProduct }