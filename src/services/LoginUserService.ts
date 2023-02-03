import { userRepository } from '../repositories/UserRepository';

class LoginUserService {
  async execute(username: string, password: string) {
    const validUser = await userRepository.findByUsername(username);

    const validPassword = password === validUser?.password ? true : false;

    if (!validPassword || !validUser) {
      throw new Error('username or password is not valid');
      return;
    }
  }
}

const loginUserService = new LoginUserService();

export { loginUserService };
