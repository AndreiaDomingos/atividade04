import { Router } from 'express'
import ProdutoRoute from './produto.route.js'
import ImagemRoute from './imagem.route.js'

const router = Router()

router.use('/produtos', ProdutoRoute)
router.use('/imagem', ImagemRoute)

export default router