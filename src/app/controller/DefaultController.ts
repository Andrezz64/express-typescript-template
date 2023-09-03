// Write your logic here
// export and consume in a route on route.ts file
// Remenber to break your logic in diferents Controllers files.

import { Request, Response } from "express";
import { Files } from "../modules/FilesOperation";

class DefaltController {
  public home(req: Request, res: Response) {
    const json = Files.ReadFileSend("./src/app/metadata.json")
    res.send(json)
  }
}
export const ExportDefaultController = new DefaltController();
