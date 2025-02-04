const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./api/config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Definir todas as rotas dentro de `/api`
const itemRoutes = require("./api/routes/itemRoutes");
app.use("/api/items", itemRoutes);

// Teste para verificar se a API está rodando
app.get("/api/test", (req, res) => {
    res.json({ message: "API funcionando no Vercel!" });
});

module.exports = app;


// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// // Conectar ao banco de dados
// require("./api/config/db"); 

// const app = express();

// app.use(cors());
// app.use(express.json());

// const itemRoutes = require(
//     "./api/routes/itemRoutes");
// app.use("/items", itemRoutes);

// app.get("/api/test", (req, res) => {
//     res.json({ message: "API working on Vercel!" });
// });

// module.exports = app;

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => 
// //     console.log(`Servidor rodando na porta ${PORT}`));
