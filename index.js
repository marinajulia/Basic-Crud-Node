const express = require('express');
const server = express();

server.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de games', 'Viver de Youtube'];

//retorna um curso
server.get('/cursos/:index', (req, res) =>{
    const{index} = req.params;
    return res.json(cursos[index]);
});

//retorna todos os cursos
server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

//criar um novo curso:
server.post('/cursos', (req, res) =>{
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//atualizar um curso:
server.put('/cursos/:index', (req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name
    return res.json(cursos);
});

//deletar um curso:
server.delete('/cursos/:index', (req, res) =>{
    const {index} = req.params;
    cursos.slice(index, 1);
    return res.json({message: 'O curso 1 foi deletado'});
});

server.listen(3000);