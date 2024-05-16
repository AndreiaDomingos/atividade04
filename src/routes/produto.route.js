import { Router } from 'express'
import ProdutoController from '../controllers/produto.controller.js'
import { ProdutoValidator, ProdutoUpdateValidator, ProdutoIdValidator} from '../validators/produto.validator.js'

const router = Router()

router.get('/', ProdutoController.index)
router.post('/',ProdutoValidator, ProdutoController.create)
router.get('/:id',ProdutoIdValidator, ProdutoController.show )
router.put('/:id',ProdutoUpdateValidator,ProdutoController.update)
router.delete('/:id',ProdutoIdValidator,ProdutoController.delete)

export default router