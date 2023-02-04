import { Router } from 'express';
import { userController } from '../controllers/UserControler';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRoute = Router();

userRoute.post('/register', userController.create);
userRoute.post('/auth', userController.login);
userRoute.get('/user/:id', authMiddleware, userController.index);

export { userRoute };
