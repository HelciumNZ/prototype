const express = require("express");
const cors = require("cors");
require("dotenv").config();
// Conectar ao banco de dados
require("./api/config/db"); 

const app = express();

app.use(cors());
app.use(express.json());

const itemRoutes = require(
    "./api/routes/itemRoutes");
app.use("/items", itemRoutes);

module.exports = app;

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => 
//     console.log(`Servidor rodando na porta ${PORT}`));
