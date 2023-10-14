import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarLivroPorId (req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };

  static async cadastrarLivro (req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  };

  /*
  Aqui, um novo objeto livroCompleto é criado, que inclui todas as propriedades 
  do objeto novoLivro e também inclui um subobjeto autor, que contém 
  todas as propriedades do documento do autor encontrado.
  */ 

  static async atualizarLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

  static async listarLivrosPorEditora (req, res) {
    const editora = req.query.publisher;
    try {
      const livrosPorEditora = await livro.find({ publisher: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
  //https://cursos.alura.com.br/search?query=node
    /**
     * query é um parâmetro de consulta que, ao passarmos
     * uma rota com a estrutura interrogação, chave, 
     * sinal de igual e valor (?chave=valor), 
     * conseguimos passar esses parâmetros de consulta 
     * (query parameters) para a rota.
     */
};

export default LivroController;