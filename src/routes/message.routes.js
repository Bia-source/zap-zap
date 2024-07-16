import { Router } from "express";
import { createMessage, getAllMessages, updateFavoriteMessage } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.post("/message", (req,res)=> {
    const { user_receiver_id, user_sender_id, body } = req.body;
    const newMessage = createMessage(user_receiver_id, user_sender_id, body);
    res.status(201).json({newMessage});
});

messageRouter.get("/message", (req,res)=> {
    const listMessages = getAllMessages();
    res.status(200).json({listMessages});
});

messageRouter.patch("/message/:id", (req,res)=> {
    const { id } = req.params;
    const updateMessage = updateFavoriteMessage(id);
    res.status(200).json({updateMessage});
});

export { messageRouter }