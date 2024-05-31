import { Router } from 'express'
import ProdutoRoute from './produto.route.js'
import FotoRoute from './foto.route.js'

const router = Router()

router.use('/produtos', ProdutoRoute)
router.use('/fotos', FotoRoute)

export default router