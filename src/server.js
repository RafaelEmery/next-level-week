const express = require('express');
const server = express();

//Configurar pasta pública
server.use(express.static('public'));

//Utilizando a template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

//Configurar rotas
server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/create-point', (req, res) => {
    return res.render('create-point.html');
});

server.get('/search-results', (req, res) => {
    return res.render('search-points.html');
});

//Ligando o servidor
server.listen(3000);
