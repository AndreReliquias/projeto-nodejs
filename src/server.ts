import express from "express";
import "./database"; //O js reconhece automaticamente que queremos importar o arquivo index dessa pasta
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

/**  
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica 
 */
// app.get("/", (request, response) => {
//     return response.json({
//         message: "Ola NLW"
//     })
// })

// app.post("/users", (request, response) => {
//     return response.json({
//         message: "Usuário salvo com sucesso!"
//     })
// })

app.listen(3333, () => console.log("Server is running on port 3333"));

