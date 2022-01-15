import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  username: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, username }: IRequest): void {
    // const userAlreadyExists = this.usersRepository.findByName(name);

    // if (userAlreadyExists) {
    //   throw new Error("User Already Exists!");
    // }

    this.usersRepository.create({ username, email });
  }
}

export { CreateUserUseCase };
