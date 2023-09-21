// Write your logic here
// export and consume in a route on route.ts file
// Remember to break your logic in diferents Controllers files.

import { Request, Response } from "express";
import { Files } from "../modules/FilesOperation";
import path from "path";

class DefaltController {
  public home(req: Request, res: Response) {
    const Datadirectory = path.join(__dirname, '..', 'data');
    const Filepath = path.join(Datadirectory,"metadata.json")
    
    const json = Files.ReadFileSend(Filepath)
    res.send(json);
  }
}
export const ExportDefaultController = new DefaltController();
