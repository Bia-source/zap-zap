import express from "express";
import { testConneciton } from "./database/connection.js";
import { routes } from "./routes/index.route.js";
import cors from "cors";

export const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, async () => {
    await testConneciton();
    console.log(`Servidor rodando na port ${port}`)
});