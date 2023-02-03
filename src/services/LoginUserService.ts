import { compare } from 'bcrypt';
import { userRepository } from '../repositories/UserRepository';

class LoginUserService {
  async execute(username: string, password: string) {
    const user = await userRepository.findByUsername(username);
    const userPassword = await compare(password, user?.password as string);
    console.log(userPassword);

    if (!userPassword || !user) {
      throw new Error('username or password is not valid');
      return;
    }
  }
}

const loginUserService = new LoginUserService();

export { loginUserService };
