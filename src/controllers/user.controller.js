import { UserEntity } from "../entities/User.entity.js";
import { UserService } from "../services/user.service.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

const instanceServiceUser = new UserService();

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await instanceServiceUser.createUserService(name, email, password);
    res
        .status(201)
        .json({
            message: "Usuário criado com sucesso!",
            newUser
        });
}

const getAllUsers = async (req, res) => {
    const users = await UserEntity.findAll();
    res.json({ users });
}

const getUserByName = async (req, res) => {
    const { name } = req.body;
    const UserFindName = await UserEntity.findOne({
        where: {
            name
        }
    });
    res.json({ UserFindName });
}

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    const userAlreadyExist = await UserEntity.findOne({
        where: {
            id
        }
    });

    if (userAlreadyExist) {
        return res.json({ message: `Usuario ${ERRORS.NOT_FOUND}` });
    }

    await UserEntity.update({ password: newPassword }, {
        where: {
            id
        }
    });
    const messageUpdate = await UserEntity.findByPk(id)
    res.json({ messageUpdate });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserEntity.destroy({
        where: {
            id
        }
    });
    res.json({
        message: `Usuario ${SUCCESS.DELETED}`
    });
}

export { createUser, getAllUsers, getUserByName, updatePassword, deleteUser }