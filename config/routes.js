const express = require('express')
const routes = express()
const Articles = require('../models/articles')


// Devolver Status de funcionamento
routes.get('/', (req,res) => {
    console.log('Back-end Challenge 2021 🏅 - Space Flight News')
    return res.json(200)
})

// Verificar todos os dados do banco
routes.get('/articles', async (req,res) => {
    const list = await Articles.findAll()
    return res.json(list)
})

// Verificar dados especificos
routes.get('/articles/:id', (req,res) => {
    const id = req.params.id
    console.log(db[id])
    return res.json(db[id-1])
})

// Adicionar dados
routes.post('/articles', async (req,res) => {
    const body = req.body
    
    if(!body)
    return res.status(400).end()
    console.log(body)
    
   await Articles.create(body)
   .then(() => {
       return res.json({
           success: true,
           message: "Aeeee"
       })
   })
   .catch(() => {
       return res.status(400).json({
           sucess: false,
           message : "fon"
       })
   })  
})

// Atualizar dados
routes.put('/articles/:id', (req,res) => {
    const id = req.params.id
    const body = req.body

    db[id-1] = body 

    return res.json(db[id-1])
})
// deletar dados
routes.delete('/articles/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes