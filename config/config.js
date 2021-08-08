const Sequelize = require('sequelize');

require('dotenv').config();

// Connection to DB
// const sequelize = process.env.DATABASE_URL
//   ? new Sequelize(process.env.DATABASE_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

const sequelize = new Sequelize('postgres://zudqbhzopstjsx:fd7813bdc61648277ad960d9b6d376b545b094105c84a0fd09f248297cb2cb72@ec2-54-205-232-84.compute-1.amazonaws.com:5432/d36ptrfsvs8vij')

module.exports = sequelize;
