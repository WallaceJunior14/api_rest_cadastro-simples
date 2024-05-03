import express from "express";
import { router } from "./routes";

const server = express();

//Fala para o servidor que o body das requisições está no formato json
server.use(express.json());

server.use(router);

export { server };