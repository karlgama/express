import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutorPorId = (req, res) => {
    const { id } = req.params;
    autores.findById(id, (err, autores) => {
      if (err)
        return res
          .status(404)
          .send({ message: `${err.message} id não encontrado` });
      return res.status(200).send(autores);
    });
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor` });
      else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const { id } = req.params;
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err)
        return res.status(200).send({ message: "atualizado com sucesso" });
      return res.status(500).send({ message: err.message });
    });
  };

  static excluirAutor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndDelete(id, (err) => {
      if (err) res.status(500).send({ message: err.message });
      res.status(200).send({ message: "excluido com sucesso" });
    });
  };
}

export default AutorController;
