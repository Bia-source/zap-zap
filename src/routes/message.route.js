import { Router } from "express";
import { 
    createMessage,
    getAllMessages,
    getMessageById,
    updateMessage,
    deleteMessage,
    updateFavotiteMessage
 } from "../controllers/message.controller.js";

const messageRoute = Router();

messageRoute.post("/new-message", createMessage);

messageRoute.get("/messages", getAllMessages);

messageRoute.get("/message-find-id/:id", getMessageById)

messageRoute.patch("/message-update/:id", updateMessage);

messageRoute.delete("/delete-message/:id", deleteMessage);

messageRoute.patch("/update-favorite/:idMessage/:idUser", updateFavotiteMessage);

export { messageRoute }