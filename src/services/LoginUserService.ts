import { compare } from 'bcrypt';
import { userRepository } from '../repositories/UserRepository';
import { sign } from 'jsonwebtoken';

class LoginUserService {
  async execute(email: string, password: string) {
    const user = await userRepository.findByEmail(email);
    const userPassword = await compare(password, user?.password as string);

    console.log('porra');

    if (!userPassword || !user) {
      throw new Error('username or password is not valid');
    }

    const token = sign({ id: user._id }, `${process.env.PRIVATE_KEY}`, {
      expiresIn: '1d',
    });

    const data = {
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    };

    return data;
  }
}

const loginUserService = new LoginUserService();

export { loginUserService };
