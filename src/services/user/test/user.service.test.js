// import { UserService } from "../user.service.js"
// import { UserEntity } from "../../../entities/User.entity.js";
import supertest from "supertest";
import { userRoute } from "../../../routes/user.route.js";
import { app } from "../../../server.js";

// const instanceServiceUser = new UserService();
// // depois de cada
// // depois de cada test
// afterEach(async ()=> {
//     await UserEntity.destroy({
//         where: {
//             name: "Teste"
//         }
//     });
// })

// test("Criando novo usuario", async ()=> {
//     const newUser = await instanceServiceUser.createUserService("Teste", "teste@gmail.com", "teste123");
//     expect(newUser).toHaveProperty("id");
// });

// describe("get /users buscando todos os usuarios",  ()=> {
//     describe("get users", ()=> {
//         it("testando alguma coisa", async () => {
//             await supertest(userRoute).get('/users').expect(200);
//         })
//     })           
// })

test('1+ 1', async ()=> {
  return supertest(app)
  .post("/new-user")
  .expect(201)
  .send({
      name:"Bea1", 
      email:"bea1@gmail.com",
      password: "bea1123"
  })
  .then((response)=> {
      expect(response.body.message).toEqual(
          "Usuário criado com sucesso!"
      )
  })
})


