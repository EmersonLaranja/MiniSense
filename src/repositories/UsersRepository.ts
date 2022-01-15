import { User } from "../entities/User";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();
    Object.assign(user, { name, email, created_at: new Date() });
    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByName(name: string): User {
    const user = this.users.find((user) => user.name === name);
    return user;
  }
}

export { UsersRepository };