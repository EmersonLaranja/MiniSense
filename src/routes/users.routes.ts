import { Router } from "express";

import createUserController from "../useCases/createUser";

const usersRoute = Router();

usersRoute.post("/", (req, res) => {
  return createUserController().handle(req, res);
});

export { usersRoute };
