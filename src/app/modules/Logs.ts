import { NextFunction, Request, Response } from "express";
import { writeFile } from "fs";
import path from "path";

class logs {
  public LogsMidlleware(req: Request, res: Response, next: NextFunction) {
    const dateAndTimeNow = new Date().toLocaleString();
    const Datadirectory = path.join(__dirname, '..', 'data');
    const Filepath = path.join(Datadirectory,"logs.log")
    const logMsg = `[${dateAndTimeNow}] - ${req.ip} - [${req.method}] - [${req.originalUrl}]\n`;

    const WriteLog = writeFile(Filepath, logMsg, { flag: "a" }, (err) => {
      if (err) throw err;
    });
    next();
  }
}

export const Logs = new logs();
