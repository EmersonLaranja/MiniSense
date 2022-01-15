import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response): Response {
    const { username, email } = req.body;
    this.createUserUseCase.execute({ username, email });
    return res.status(201).send();
  }
}

export { CreateUserController };
