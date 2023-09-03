// Create your routes here
// Import a controller an call a method for a route

import { Router } from "express";
import { ExportDefaultController } from "./app/controller/DefaultController";

const router: Router = Router()

//Routes
router.get("/", ExportDefaultController.home);

export { router };