import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json("Olá, mundo");
});

app.get('/cadastrar/', (req, res) => {
    res.json("Cadastrar");
});

app.get('/aluno/:nome', (req, res) => {
    res.send(`Olá, ${req.params.nome}`);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});