import { Dialect, Sequelize } from "sequelize";
export class Db {
  // if the ORM model isnt enought to solve your problem, you can just create a new instance of this class an made your handmake query.
  private database!: string;
  private username!: string;
  private password!: string;
  private host!: string;
  private dbDialect!: Dialect;
  private static instance: Db;

  private sequelize: Sequelize;

  constructor(
    database: string,
    username: string,
    password: string,
    host: string,
    dbDialect: Dialect
  ) {
    
    this.database = database;
    this.username = username;
    this.password = password;
    this.host = host;
    this.dbDialect = dbDialect;

    this.sequelize = new Sequelize(database, username, password, {
      host: host,
      dialect: dbDialect,
    });
  }

  public Getsequelize(): Sequelize {
    // use this method to make the database operations
    return this.sequelize;
  }
}
