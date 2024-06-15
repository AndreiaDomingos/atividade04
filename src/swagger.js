import swaggerAutogen from 'swagger-autogen' //importa a função da biblioteca

const doc = { //cria objeto com as configurações solicitadas na documentação da biblioteca
info:{
    version:'1.0.0',
    title: 'Minha Api',
    description: 'API de exemplo'
},
servers:[
    {url: 'htt://localhost:3000'}
],

definitions:  {
    AddOrUpdateProduct: {
     nome: "Nome do user",
     preco: 20,
     descricao: "descrição do produto"
    },
    AddOrUpdateFotos:{
     titulo: "teste", url: "teste", produtoId: 1
    }
 }
}

const outputFile = './swagger-output.json'
const endpoints = ['./server.js']


swaggerAutogen({openapi: '3.0.0'})(outputFile,endpoints,doc)