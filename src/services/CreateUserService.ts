import { userRepository } from '../repositories/UserRepository';

class CreateUserService {
  async execute(username: string, email: string, password: string) {
    const existedUsername = await userRepository.findByEmail(email);
    const existedEmail = await userRepository.findByUsername(username);

    if (existedUsername || existedEmail) {
      throw new Error('Usuário ou email já cadastrados');
    }

    return await userRepository.save(username, email, password);
  }
}

const createUserService = new CreateUserService();

export { createUserService };
