import { Router } from 'express'
import FotoController from '../controllers/foto.contoller.js'
import { createFotoValidator} from '../validators/foto.validator.js'

const router = Router()

router.get('/', FotoController.index)
router.post('/',createFotoValidator, FotoController.create)
//router.get('/:id',FotoIdValidator, FotoController.show )
//router.put('/:id',FotoUpdateValidator,FotoController.update)
//router.delete('/:id',FotoIdValidator,FotoController.delete)

export default router