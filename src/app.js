import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import uploadUser from "./config/multer.js";
//import { fileURLToPath } from 'url';
//import path, { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const conexao = await connectDataBase();

conexao.on('error', err => console.error(err));

conexao.once("open", () => {
    console.log("Connect to database");
});

const app = express();
//app.use(express.static(path.join(__dirname, '/uploads')));
routes(app);

export default app;