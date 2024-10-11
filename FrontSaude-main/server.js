const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Permitir requisições do frontend React
app.use(express.json()); // Para processar JSON no body das requisições

// Configuração do Pool do PostgreSQL
const pool = new Pool({
  user: "seu_usuario",
  host: "localhost", // ou o IP do seu servidor PostgreSQL
  database: "seu_banco",
  password: "sua_senha",
  port: 5432, // Porta padrão do PostgreSQL
});

// Rota para buscar dados do banco
app.get("/api/dados", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sua_tabela");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro no servidor" });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
