require('dotenv').config();
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended:false }));

server.get('/ping', (req, res) =>{
    res.json({pont : true});
});

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});