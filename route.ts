import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts } from './controllters/products.ts'

const router = new Router()

router.get('/api/products', getProducts)

export default router