import express from "express";

const app = express();

const livros = [{ id: 1, titulo: "senhor dos aneis" }];

app.get("/", (req, res) => {
  res.status(200).send("curso node");
});

app.get("/livros",(req,res)=>{
    res.status("200").json(livros)
})

export default app