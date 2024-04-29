import { Router } from "express";
import { userRoutes } from "./users";

const routes = Router();

routes.use('/user', userRoutes);

export {routes};