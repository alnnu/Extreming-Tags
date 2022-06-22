const Router = require("koa-router");

const LogController = require("../controls/Log.controller");
const NoteController = require("../controls/Note.controller");
const routes = new Router();

routes
  .get("/", (ctx) => {
    ctx.body = {
      status: "sucess",
      message: "foi",
    };
  })
  .use(LogController)
  .use(NoteController);

module.exports = routes;
