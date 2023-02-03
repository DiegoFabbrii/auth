import { Request, Response } from 'express';
import { createUserService } from '../services/CreateUser.service.ts';

class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await createUserService(username, email, password);
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ error: error.message });
    }
  }
}

const userContoller = new UserController();

export { userContoller };
