import { Messages } from "../models/Message.model.js";
import { listUser } from "./user.controller.js";

let listMessages = [];

// CRUD
export const createMessage = (user_receiver_id, user_sender_id, body) => {
    // verificar se os dois usuarios existem no banco de dados
    const userReceiverAlreadyExist = listUser.find(user => user.id == user_receiver_id);
    const userSenderAlreadyExist = listUser.find(user => user.id == user_sender_id);

    if(userReceiverAlreadyExist && userSenderAlreadyExist){
        const newMessage = new Messages(user_receiver_id, user_sender_id, body);
        listMessages.push(newMessage);
        return newMessage;
    }else{
        return "Um dos usuarios nao faz parte do nosso banco de dados"
    }
    
}

export const getAllMessages = () => {
    return listMessages;
}

export const updateFavoriteMessage = (id) => {
// objetivo: editar apenas o favorite da mensagem
    // já existente

    // buscando uma mensagem por id
    // retorno do find é um objeto
    const messageAlreadyExist = listMessages.find(message => message.id == id);

    // verificando se a mensagem realmente existe no banco de dados
    if(messageAlreadyExist){
        let indexMessage = listMessages.findIndex(message => message.id == id);
        listMessages[indexMessage].changeFavorite();
        return listMessages[indexMessage];
    }else{
        return "Nao existe uma mensagem com este id"
    }
}

export const updateBodyMessage = (id, text, idSender) => {
    const messageAlreadyExist = listMessages.find(message => message.id == id);

    // verificando se a mensagem realmente existe no banco de dados
    if(messageAlreadyExist){
        let indexMessage = listMessages.findIndex(message => message.id == id);
        listMessages[indexMessage].changeBodyMessage(text, idSender);
        return listMessages[indexMessage];
    }else{
        return "Nao existe uma mensagem com este id"
    }
}


// Delete de mensagem
// obs: o unico usuario que pode deletar uma mensagem é seu criador

export const deleteMessage = (idMessage, idUser) => {
    const messageAlreadyExist = listMessages.find(message => message.id == idMessage);
    const userSender = listMessages.find(message => message.user_sender_id == idUser)

    if(messageAlreadyExist && userSender){
        let indexMessage = listMessages.findIndex(message => message.id == idMessage)
        listMessages.splice(indexMessage,1)
    } else {
        return "não é possível apagar essa mensagem"
    }
}

