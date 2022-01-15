import { User } from "../entities/User";

interface ICreateUserDTO {
  id?: number;
  username: string;
  email: string;
}

interface IUsersRepository {
  create({ username, email }: ICreateUserDTO): void;
  // findByName(username: string): User;
  // findById(username: string): User;
  // list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
