import { EntityRepository, getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";

@EntityRepository(User)
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({ username, email }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ username, email });
    await this.repository.save(user);
  }

  // list(): User[] {
  //   return this.users;
  // }

  // findByName(name: string): User {
  //   const user = this.users.find((user) => user.name === name);
  //   return user;
  // }
  // findById(name: string): User {
  //   const user = this.users.find((user) => user.name === name);
  //   return user;
  // }
}

export { UsersRepository };
