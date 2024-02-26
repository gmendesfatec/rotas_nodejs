import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json("Olá, mundo");
});

app.get('/cadastrar/:produto', (req, res) => {
    res.json(`Cadastro do produto: ${req.params.produto}`);
});

app.get('/pesquisar/:produto/:modelo', (req, res) => {
    res.send(`Produto: ${req.params.produto} <br>Modelo: ${req.params.modelo}`);
});

app.get('/contato/sac/:produto', (req, res) => {
    res.send(`Produto: ${req.params.produto}`)
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});