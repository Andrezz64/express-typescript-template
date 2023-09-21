// sequelizeConfig.ts

//This File can be used to set a global config to your data base, just import in your model and enjoy the ORM

import { Sequelize } from 'sequelize';

// Remember, you can configuere a .env file with the lib dotenv to read processes enviroment
// Do not set passwords directly in this file

// Attention! Maybe will be necessary install a especific lib to operate your db

const sequelize = new Sequelize({
  dialect: 'postgres', // Choose your DataBase (ex: postgres, mysql, sqlite, etc.)
  host: 'localhost', // Set the Host, local or remote of your dataBase
  username: 'postgres', //  Username to connect to the database
  password: 'YourPassword', // Your user Database password
  database: 'YourDatabase', // The database of this application
  // port: 5432 //if you are not using yout DB´s default port change here
});

export default sequelize;