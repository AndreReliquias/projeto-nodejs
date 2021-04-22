import { Router } from "express";
import { MessagesController } from "./Controller/MessagesController";
import { SettingsController } from "./Controller/SettingsController";
import { UsersController } from "./Controller/UsersController";

const routes = Router();

const settingsController = new SettingsController();

const usersController = new UsersController();

const messagesController = new MessagesController();

/**
 * Tipos de parametros
 * 1 - Routes Params => Parametros de rotas {
 *  http://localhost:3333/settings/1
 * }
 * 2 - Query Params => Filtros e buscas {
 *  http://localhost:3333/settings/1?search=algumacoisa&outra
 * }
 * 3 - Body Params => No corpo {
 * passa objetos por json
 * }
 */

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };