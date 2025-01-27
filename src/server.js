const express = require('express')
const body_parser = require('body-parser')
const app = express()


//configurações da aplicação
app.use(express.static('public'))
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.set('view engine','ejs')

//criação da rota principal da aplicação
app.get('/',(req,res)=>{
    res.send('Bem vindo a rota principal')
})

//inicialiazando o servidor
const porta = 8001
app.listen(porta,(req,res,erro)=>{
    if(erro)
        res.status(404).send('Servidor indisponivel!')
    else
        console.log('Servidor rodando em http//:localhost:8001')
})