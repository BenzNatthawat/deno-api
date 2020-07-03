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

export { getProducts, getProduct }