import express from "express";
import livros from "./LivrosRoutes.js";
import autores from "./AutoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200), send({ titulo: "Olá" });
  });

  app.use(express.json(), livros, autores);
};

export default routes;
