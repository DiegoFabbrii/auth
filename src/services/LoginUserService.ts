import { compare } from 'bcrypt';
import { userRepository } from '../repositories/UserRepository';
import { sign } from 'jsonwebtoken';

class LoginUserService {
  async execute(email: string, password: string) {
    const user = await userRepository.findByEmail(email);

    const userPassword = user ? await compare(password, user?.password) : false;

    if (!user || !userPassword) {
      throw new Error('Email ou senha incorretos');
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
