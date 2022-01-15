import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): void;
  findByName(name: string): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
