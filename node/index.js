const express = require("express");

const server = express();

server.use(express.json())

// Query params = ?nome=Nodejs
// Route params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// CRUD -> Create, Read,  Update, Delete

const cursos = ['ReactJS', 'JavaScript', 'NodeJS']


// Middleware Global
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`)
    return next()
})

// Middleware VERIFICA se enviou um index de curso
function checkIndex(req, res, next) {
    
    const indexCurso = cursos[req.params.index]; 

    if(!indexCurso){
        return res.status(400).json({error: "Erro index"})
    }

    return next();
}

// Middleware VERIFICA se enviou um nome de curso
function checkCurso(req, res, next) {
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso é obrigatorio"})
    }

    return next();
}

// Read
server.get('/cursos', (req, res) => {
    return res.json(cursos)
})


// http://localhost:3000/curso
server.get('/cursos/:index', checkIndex, (req, res) => {

    const index = req.params.index
    return res.json(cursos[index])

})

// Create
server.post('/cursos', checkCurso, (req, res) => {
    
    const { name } = req.body
    cursos.push(name)

    return res.json(cursos)
})

// Update
server.put('/cursos/:index', checkCurso, checkIndex, (req, res) => {

    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);

})

// Delete
server.delete('/cursos/:index', checkIndex, (req, res) => {
    
    const { index } = req.params;

    cursos.splice(index, 1)

    return res.json(cursos)

})



server.listen(3000)