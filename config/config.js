const Sequelize = require('sequelize');

// Connection to DB
const sequelize = new Sequelize('tech_blog_db', 'root', 'DeerRan', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
