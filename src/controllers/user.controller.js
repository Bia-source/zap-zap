import { User } from "../models/User.model.js";

export let listUser = [];

// CRUD
export const createUser = (username, phone) => {
    const newUser = new User(username, phone);
    listUser.push(newUser);
    return newUser;
}

export const getAllUsers = () => {
    return listUser;
}

export const updateStatus = (id) => {
// objetivo: editar apenas o statusOn de um usuario
    // já existente

    // buscando um usuario por id
    // retorno do find é um objeto
    const userAlreadyExist = listUser.find(user => user.id == id);

    // verificando se o usuario realmente existe no banco de dados
    if(userAlreadyExist){
        let indexUser = listUser.findIndex(user => user.id == id);
        //listUser[indexUser].statusOn = changeOn(userAlreadyExist.statusOn);
        listUser[indexUser].changeOn();
        return listUser[indexUser];
    }else{
        return "Nao existe um usuario com este id"
    }
}

// function changeOn(param){
//     if(param){
//         return false
//     }else{
//         return true
//     }
// }

// Delete de usuario
// obs: o unico usuario que pode deletar sua conta é seu criador

export const deleteUser = (idUser) => {
   const userAlreadyExist = listUser.find(user => user.id == idUser)

    if(userAlreadyExist){
        let indexUser = listUser.findIndex(user => user.id == idUser)
        listUser.splice(indexUser,1)
    } else {
        return "não é possível apagar este usuario"
    }
}