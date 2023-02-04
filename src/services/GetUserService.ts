import { userRepository } from '../repositories/UserRepository';

class GetUserService {
  async execute(id: string) {
    const user = await userRepository.findById(id);

    const data = {
      id: user?._id,
      username: user?.username,
      email: user?.email,
    };

    return data;
  }
}

const getUserService = new GetUserService();

export { getUserService };
