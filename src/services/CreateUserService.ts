import { userRepository } from '../repositories/UserRepository.ts';

class CreateUserService {
  async execute(username: string, email: string, password: string) {
    const user = await userRepository.save(username, email, password);
    return user;
  }
}

const createUserService = new CreateUserService();

export { createUserService };
