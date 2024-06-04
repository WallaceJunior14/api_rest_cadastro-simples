import express from "express";
import 'dotenv/config'

import '../shared/services/TranslationsYup'
import { router } from "./routes";

const server = express();

//Fala para o servidor que o body das requisições está no formato json
server.use(express.json());

server.use(router);

export { server };