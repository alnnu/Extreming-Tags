const Router = require("koa-router");

const NoteController = require("../controls/Note.controller");
const ProjeController = require("../controls/Projeto.controller");
const TarefaController = require("../controls/Tarefa.controller");
const PessoaController = require("../controls/Pessoa.controller");
const routes = new Router();

routes
  .get("/", async (ctx) => {
    await ctx.render("index");
  })
  .use(NoteController)
  .use(ProjeController)
  .use(TarefaController)
  .use(PessoaController);

module.exports = routes;
