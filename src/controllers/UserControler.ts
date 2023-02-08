import { Request, Response } from 'express';
import { createUserService } from '../services/CreateUserService';
import { getUserService } from '../services/GetUserService';
import { loginUserService } from '../services/LoginUserService';

class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      await createUserService.execute(username, email, password);

      return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error: unknown) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userLogged = await loginUserService.execute(email, password);
      return res.status(200).json(userLogged);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(404).json({ error: error.message });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const id = req.userId;
      const user = await getUserService.execute(id);
      return res.status(200).json(user);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(404).json({ error: error.message });
    }
  }
}

const userController = new UserController();
export { userController };
