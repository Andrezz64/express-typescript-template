// This is the main class, every express config goes here

import express from "express";
import { router } from "./router";
import { Logs } from "./app/modules/Logs";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(Logs.LogsMidlleware);
  }

  private router() {
    this.server.use(router);
  }
}
