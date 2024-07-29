import sqlite3 from "sqlite3";
// inserir informacoes no console sobre a consulta
sqlite3.verbose();

// instanciando/ criando um banco de dados
// exportando o banco de dados através de uma constante
// db é um objeto que representa o banco de dados
export const db = new sqlite3.Database("./data_database.db");

export const createTableUser = () => {
    db.run(`CREATE TABLE IF NOT EXISTS "users" (
        "id" VARCHAR(191) PRIMARY KEY,
        "username" VARCHAR(150),
        "phone" CHAR(11),
        "statusOn" bool,
        "created_at" datetime
        );`)
}

// export const deleteTableUser = () => {
//     db.run(`DROP TABLE "users"`);
// }

// export const createTableMessage = () => {
//     db.run(`CREATE TABLE IF NOT EXISTS ()`)
// }

// db.serialize(()=> {
//     createTableUser();
//     createTableMessage();
// })

