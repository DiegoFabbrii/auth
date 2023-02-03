import { userRepository } from '../repositories/UserRepository';

class CreateUserService {
  async execute(username: string, email: string, password: string) {
    const existedUser = await userRepository.findByUsername(username);

    if (existedUser) {
      throw new Error('username or email already exists');
      return;
    }

    return await userRepository.save(username, email, password);
  }
}

const createUserService = new CreateUserService();

export { createUserService };
