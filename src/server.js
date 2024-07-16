import express from "express";
import { userRouter } from "./routes/user.routes.js";

const app = express()
const port = 4000

// permite nosso js entender json
app.use(express.json());

// dando acesso as nossas rotas
app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})