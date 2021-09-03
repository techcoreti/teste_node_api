const express = require('express')
const api = express();
const Routes = require('./routes/routes')
const routes = new Routes()
const porta  = 4040

api.use(express.json({limit: '1mb'}))
api.use(routes.routes)

api.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})

