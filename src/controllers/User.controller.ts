import { Request, Response } from 'express';
import { createUserService } from '../services/CreateUserService';

class UserController {
  create(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = createUserService.execute(username, email, password);
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ error: error.message });
    }
  }
}

const userContoller = new UserController();

export { userContoller };
