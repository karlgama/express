import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivroPorId = (req, res) => {
    const { id } = req.params;
    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (err)
          return res
            .status(404)
            .send({ message: `${err.message} id não encontrado` });
        return res.status(200).send(livros);
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro` });
      else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const { id } = req.params;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err)
        return res.status(200).send({ message: "atualizado com sucesso" });
      return res.status(500).send({ message: err.message });
    });
  };

  static excluirLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndDelete(id, (err) => {
      if (err) res.status(500).send({ message: err.message });
      res.status(200).send({ message: "excluido com sucesso" });
    });
  };
}

export default LivroController;
