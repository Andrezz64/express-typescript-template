# express-typescript-template
A node/express based template using Controllers,ORM, class and others design patterns

### About the project

This is a template with some patterns that i like to implement, logs middleware, ORM, Controllers, Models. My wish was create something like the ASP net API but in a JS ecosystem.

### Controllers

A controller is a small piece of your code, the logic thats gona be serverd in a route. When you use a Controller the logic of that route will be separed, and more fast to repair.

```
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


```

### ORM

A model is a abstration of the object that you wanna to build in application and and database  levels. Is a ORM based thats you can operate in DB operations, like create, delete, update and sync to create the table, without a single query

In this porject the ORM lib used was the Prisma ORM

[Prisma Docs](https://www.prisma.io/docs/getting-started)

```
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}

```

### Modules

The modules in this project are Typescript Classes with diferents methods, like logs, FilesOperations, Db. All this classes operate in the main code like js modules, but based in POO, so its possible to create a new instance of a class and use with a controller.

Exemple of a Log class:

```
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

```

### Config File (new)

The config file is a JS Module in the data folder on src, some configs params can be set ad re-write the default pre-set settings

```
module.exports = {
    token: {
        expires: "2h",
        exceptionsRoutes: ["/api/v1/login", "/api/v1/user"]
    },
    logs:{
        fileName:"fileNameExample",
        filePath:"C:/Users/john.doe/api"
    }
};
```