// import http from "http";
import "dotenv/config";
import app from "./src/app.js";
import cors from 'cors';

const PORT = 3001;

app.use(cors());
// const rotas = {
//     "/": "Curso Node.js",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(rotas[req.url]);
// });
// server
app.listen(PORT, () => {
    console.log("Escutando Servidor");
});