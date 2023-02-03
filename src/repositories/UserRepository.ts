import { User } from '../models/User';

class UserRepository {
  async save(username: string, email: string, password: string) {
    return await User.create({ username, email, password });
  }

  async findByUsername(username: string) {
    return await User.findOne({ username });
  }
}

const userRepository = new UserRepository();

export { userRepository };
