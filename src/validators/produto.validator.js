import {body, param} from "express-validator"

export  const ProdutoValidator = [
    /*
#swagger.requestBody = {
required:true,
content: {
"application/json":{
schema:{
$ref: "#/components/schemas/AddOrUpdateProduct"}}}}
    */
    body('nome').isString().withMessage(`Nome é obrigatório!`),
    body('preco').isNumeric().withMessage(`Preço é obrigatório!`),
    body('descricao').isString().withMessage(`Descrição é obrigatório!`)
]

export const ProdutoUpdateValidator = [
    param ('id').isInt().withMessage(`ID inválido!`), 
    body('nome').isString().withMessage(`Nome é obrigatório!`),
    body('preco').isNumeric().withMessage(`Preço é obrigatório!`),
    body('descricao').isString().withMessage(`Descrição é obrigatório!`)
]

export const ProdutoIdValidator = [
    param ('id').isInt().withMessage(`ID inválido!`)
]