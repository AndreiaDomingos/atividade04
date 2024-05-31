import {body, param} from "express-validator"

export  const createFotoValidator = [
    body('titulo').isString().withMessage(`Titulo é obrigatório!`),
    body('url').isString().withMessage(`URL é obrigatório!`),
    body ('produtoId').isInt().withMessage(`Id inválido!`)
]

export  const fotoUpdateValidator = [
    param ('id').isInt().withMessage('Id é obrigatório'),
    body('titulo').isString().withMessage(`Titulo é obrigatório!`),
    body('url').isString().withMessage(`URL é obrigatório!`),
    body ('produtoId').isInt().withMessage(`Id inválido!`)
]

export  const fotoIdValidator = [
    param ('id').isInt().withMessage('Id é obrigatório')
]