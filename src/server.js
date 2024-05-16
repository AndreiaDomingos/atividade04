import express from 'express'
import routes from './routes/index.js'

const app = express()

const PORT = 3000

/*app.get('/', (req, res) => {
    res.send('Olá, mundo!')
  })*/

app.use(express.json())
app.use('/api', routes) 

 app.listen(PORT, () => {
    console.log(`O servidor está executando em http://localhost:${PORT}`)
  })

