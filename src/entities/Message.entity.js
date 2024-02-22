import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const MessageEntity = database.define('Message', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    senderId:{
        type: DataTypes.UUID,
        allowNull: false
    },
    receiverId:{
        type: DataTypes.UUID,
        allowNull: false
    },
    message: {
        type:DataTypes.STRING,
        allowNull: false
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

export { MessageEntity }