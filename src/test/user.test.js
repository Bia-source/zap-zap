import { UserService } from "../services/user.service.js"
import { UserEntity } from "../entities/User.entity.js";

const instanceServiceUser = new UserService();
// depois de cada
// depois de cada test
afterEach(async ()=> {
    await UserEntity.destroy({
        where: {
            name: "Teste"
        }
    });
})

test("Criando novo usuario", async ()=> {
    const newUser = await instanceServiceUser.createUserService("Teste", "teste@gmail.com", "teste123");
    expect(newUser).toHaveProperty("id");
});


