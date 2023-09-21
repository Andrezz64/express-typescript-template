// This is a example of a Controller thats use a Model to interact with a database

import { Request, Response } from "express";
import { User } from "../models/User";

class userController {
  public async userRegister(req: Request, res: Response) {
    try {
      const username = req.body.username;
      const user = User.create({ username }); // Use a ORM model to create a database entry.

      res.status(200).json(user);
    } catch (e) {
      console.error("Ops! An error ocurred", e);
      res.status(500).json(e);
    }
  }
}

export const UserController = new userController();
