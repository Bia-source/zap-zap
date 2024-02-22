import { MessageEntity } from "../entities/Message.entity.js";
import { UserEntity } from "../entities/User.entity.js";

const createMessage = async (req, res) => {
    await MessageEntity.sync();
    const { message, senderId, receiverId } = req.body;
    const newMessage = await MessageEntity.create({
        message, senderId, receiverId
    });
    res
    .status(201)
    .json({
        message: "Mensagem criada com sucesso!",
        newMessage
    });
}

const getAllMessages = async (req, res) => {
    const messages = await MessageEntity.findAll();
    res.json({messages});
}

const getMessageById = async (req, res) => {
    const { id } = req.params;
    const messageFindId = await MessageEntity.findByPk(id);
    res.json({messageFindId});
}

const updateMessage = async (req, res) => {
    const { id } = req.params;
    const { newMessage } = req.body;
    await MessageEntity.update({message: newMessage}, {
        where: {
            id
        }
    });
    const messageUpdate = await MessageEntity.findByPk(id);
    res.json({messageUpdate});
}

const deleteMessage = async (req, res) => {
    const { id } = req.params;
    await MessageEntity.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Mensagem deletada com sucesso!"
    })
}

// REGRA DE NEGOCIO
// Somente quem enviou a mensagem pode favoritar sua mensagem 
const updateFavotiteMessage = async (req,res) => {
    try {
        const { idMessage, idUser } = req.params;
        const message = await MessageEntity.findByPk(idMessage);
        let statusFavorite;

        // if ternario
        // condicao               // chave depois do if   // else
        (message.favorite === false) ? statusFavorite = true : statusFavorite = false;
        // if(message.favorite === false){
        //     statusFavorite = true
        // }else{
        //     statusFavorite = false
        // }
        await MessageEntity.update({favorite: statusFavorite}, {
            where: {
                id,
                senderId: idUser
            }
        });
        const messageUpdate = await MessageEntity.findByPk(id);
        console.log("lala")
        return res.json({messageUpdate});
    } catch (error) {
        res.json({message: error});
    }
}

export { createMessage, getAllMessages, getMessageById, updateMessage, deleteMessage, updateFavotiteMessage }