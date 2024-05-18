import {body, param} from "express-validator"

export  const createimagemValidator = [
    body('title').isString().withMessage(`Title é obrigatório!`),
    body('url').isString().withMessage(`URL é obrigatório!`),
    body ('imagemId').isInt().withMessage(`Id inválido!`)
]