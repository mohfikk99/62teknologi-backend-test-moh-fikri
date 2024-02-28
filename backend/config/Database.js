import { Sequelize } from "sequelize";

const db = new Sequelize("enam_dua_teknologi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// const db = new Sequelize('enam_dua_teknologi', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: "postgres"
// });


export default db;
