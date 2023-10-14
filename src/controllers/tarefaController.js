import Tarefa from "../models/Tarefa.js";

class TarefaController {
  static async listarTarefas(req, res) {
    try {
      const listaTarefas = await Tarefa.find({});
      res.status(200).json(listaTarefas);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarTarefaPorId(req, res) {
    try {
      const id = req.params.id;
      const tarefaEncontrada = await Tarefa.findById(id);
      res.status(200).json(tarefaEncontrada);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição da tarefa` });
    }
  }

  static async cadastrarTarefa(req, res) {
    try {
      const novaTarefa = req.body;
      const tarefaCriada = await Tarefa.create(novaTarefa);
      res.status(201).json({ message: "criado com sucesso", tarefa: tarefaCriada });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar tarefa` });
    }
  }

  static async atualizarTarefa(req, res) {
    try {
      const id = req.params.id;
      await Tarefa.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "tarefa atualizada" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirTarefa(req, res) {
    try {
      const id = req.params.id;
      await Tarefa.findByIdAndDelete(id);
      res.status(200).json({ message: "tarefa excluída com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  static async listarTarefaPorNome (req, res) {
    const task = req.query.task;
    try {
      const tarefaPorNome = await Tarefa.find({ task: task });
      res.status(200).json(tarefaPorNome);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
};

export default TarefaController;