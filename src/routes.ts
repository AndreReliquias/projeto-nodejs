import { Router } from "express";
import { SettingsController } from "./Controller/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

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

export { routes };