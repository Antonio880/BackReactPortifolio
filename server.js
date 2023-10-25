// import http from "http";
import "dotenv/config";
import app from "./src/app.js";
import cors from 'cors';
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const PORT = 3001;


app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log("Escutando Servidor");
});