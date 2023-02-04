import { compare } from 'bcrypt';
import { userRepository } from '../repositories/UserRepository';
import { sign } from 'jsonwebtoken';

class LoginUserService {
  async execute(username: string, password: string) {
    const user = await userRepository.findByUsername(username);
    const userPassword = await compare(password, user?.password as string);
    console.log(userPassword);

    if (!userPassword || !user) {
      throw new Error('username or password is not valid');
      return;
    }

    const token = sign({ id: user._id }, `${process.env.PRIVATE_KEY}`, {
      expiresIn: '1d',
    });

    return token;
  }
}

const loginUserService = new LoginUserService();

export { loginUserService };
