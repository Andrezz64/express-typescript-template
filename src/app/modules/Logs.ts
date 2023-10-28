/**
 * The logs class is dedicated to collecting data and telemetry, improve this class for whatever you want.
 * With HTTP post for a logs microservice or Cloud providers tracing
 * 
 */

import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
import { writeFile } from "fs";
import path from "path";

class logs {

  //This Middleware is enable by default, 
  public LogsMidlleware(req: Request, res: Response, next: NextFunction) {
    const config = require("../data/Config");
  
    const dateAndTimeNow = new Date().toLocaleString();
    let Filepath 
    let FileName

    
    const Datadirectory = path.join(__dirname, '..', 'data');
    const FilepathDefault = path.join(Datadirectory)
    const logMsg = `[${dateAndTimeNow}] - ${req.ip} - [${req.method}] - [${req.originalUrl}]\n`;
    
    // Skip the undefined error if the configs its not set
    try{
    Filepath = config.logs.filePath 
     FileName = config.logs.fileName 
    }
    catch(e){
      console.log(e)
    }
    
    // Set the default value to the log´s path and file name, if its not set in config.js
    if(!Filepath){
      Filepath = FilepathDefault

    }
    
    if(!FileName){
      FileName = "logs"
    }
    
  
    const WriteLog = writeFile(Filepath+"/"+FileName+".log", logMsg, { flag: "a" }, (err) => {
      if (err) throw err;
    });
    next();
  }
}

export const Logs = new logs();
