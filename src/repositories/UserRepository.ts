import { User } from '../models/User';

class UserRepository {
  async save(username: string, email: string, password: string) {
    return await User.create({ username, email, password });
  }

  async findByEmail(email: string) {
    return await User.findOne({ email });
  }

  async findByUsername(username: string) {
    return await User.findOne({ username });
  }

  async findById(id: string) {
    return await User.findOne({ _id: id });
  }
}

const userRepository = new UserRepository();

export { userRepository };
