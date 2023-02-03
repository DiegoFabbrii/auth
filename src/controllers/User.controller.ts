import { Request, Response } from 'express';
import { createUserService } from '../services/CreateUserService';
import { loginUserService } from '../services/LoginUserService';

class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await createUserService.execute(username, email, password);
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const token = await loginUserService.execute(username, password);
      return res.status(200).json({ token });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(404).json({ error: error.message });
    }
  }
}

const userContoller = new UserController();

export { userContoller };
