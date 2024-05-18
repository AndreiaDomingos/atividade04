import { Router } from 'express'
import ImagemController from '../controllers/imagem.contoller.js'
import { createimagemValidator} from '../validators/imagem.validator.js'

const router = Router()

router.get('/', ImagemController.index)
router.post('/',createimagemValidator, ImagemController.create)
//router.get('/:id',ProdutoIdValidator, ProdutoController.show )
//router.put('/:id',ProdutoUpdateValidator,ProdutoController.update)
//router.delete('/:id',ProdutoIdValidator,ProdutoController.delete)

export default router