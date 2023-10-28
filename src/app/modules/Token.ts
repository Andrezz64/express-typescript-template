// This class can be used to create and validate JWT 

import { NextFunction, Request, Response } from "express";
require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../data/Config");

class token {
  
  private jwt = require("jsonwebtoken");
  private key = process.env.KEY; // Change the token key in .env file
  public genereateToken(dados: Object) {
    const token = this.jwt.sign(dados, this.key, {
      expiresIn: config.token.expires||"2h",
    });

    return token;
  }
  // This method was developed to be used like a middleware in express context
  public validateToken(req: Request, res: Response, next: NextFunction) {
  
    const exeption = config.token.exeptionsRoutes;

    exeption || "";

    if (config.token.exeptionsRoutes.includes(req.path)) {
      return next();
    }
    jwt.verify(
      req.headers.authorization,
      this.key,
      function (err: Error, payload: Object) {
        res.locals = {
          token: "Dados passados do middleware para a próxima rota",
        };
        if (err) {
          return res.status(401).send({
            errorCode: "InvalidToken",
            msg: "Opss! Token de acesso invalido ou expirado",
          });
        }
        if (payload) {
          return next();
        } else {
          return false;
        }
      }
    );
  }
}

export const Token = new token();
