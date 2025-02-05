const express = require("express");
const cors = require("cors");
const favicon = require("serve-favicon");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Importando as rotas
const itemRoutes = require("./api/routes/itemRoutes");
app.use("/api/items", itemRoutes);

app.get("/api", (req, res) => {
    console.log('API checking')
    res.json({ 
        message: "API is working! Use /api/items to access data." 
    });
});

app.get("", (req, res) => {
    console.error("🚨 Algo deu errado no backend!");
    console.log("acessando backend!");
    res.json({ 
        message: "API is working! Use /api/items to access data." 
    });
});

// Configurando o server para o Vercel
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
