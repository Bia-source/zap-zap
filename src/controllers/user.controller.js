import { UserEntity } from "../entities/User.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";


const createUser = async (req, res) => {
    try {
        await UserEntity.sync();
        const { name, email, password } = req.body;
        const userAlreadyExist = await UserEntity.findOne({
            where: {
                name,
                email
            }
        });

        // erro personalizado
        if (userAlreadyExist) {
            return res.json({ message: `Usuario ${ERRORS.ALREADY_EXIST}` });
        }

        const newUser = await UserEntity.create({
            name, email, password
        });
        res
            .status(201)
            .json({
                message: "Usuário criado com sucesso!",
                newUser
            });
    } catch (error) {
        res.status(400).json({message: error})
    }

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