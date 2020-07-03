import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct } from './controllters/products.ts'

const router = new Router()

router.get('/api/products', getProducts)
  .get('/api/products/:id', getProduct)
  .post('/api/products', addProduct)

export default router