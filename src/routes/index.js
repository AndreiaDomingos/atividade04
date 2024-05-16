import { Router } from 'express'
import ProdutoRoute from './produto.route.js'

const router = Router()

router.use('/produtos', ProdutoRoute)

export default router