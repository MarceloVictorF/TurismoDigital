const express = require('express');
const app = express();
const porta = 443;

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/principal.html');
});

app.get('/RA', (req, res) => {
  res.sendFile(__dirname + '/RA.html');
});

app.get('/convento', (req, res) => {
  res.sendFile(__dirname + '/convento.html');
});

app.get('/casaDaMemoria', (req, res) => {
  res.sendFile(__dirname + '/casaDaMemoria.html');
});

app.get('/conventoSaoFrancisco', (req, res) => {
  res.sendFile(__dirname + '/conventoSaoFrancisco.html');
});

app.get('/igrejaReisMagos', (req, res) => {
  res.sendFile(__dirname + '/igrejaReisMagos.html');
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/sobre.html');
});

app.listen(porta, () => {
  console.log("Servidor rodando.");
});