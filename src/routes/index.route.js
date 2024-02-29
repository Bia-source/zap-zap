import { Router } from "express";
import { userRoute } from "./user.route.js";
import { messageRoute } from "./message.route.js";

const routes = Router();

routes.use(userRoute);
routes.use(messageRoute);

export { routes }