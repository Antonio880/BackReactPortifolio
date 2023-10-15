import express  from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import tarefas from "./tarefasRoutes.js";
import users from "./usersRoutes.js";

const routes = ( app ) => {

    app.route("/").get((req, res) => res.status(200).send("Teste Curso"));

    app.use(express.json(), livros, autores, tarefas, users);

};

export default routes;