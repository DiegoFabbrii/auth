import { Router } from 'express';
import { userContoller } from '../controllers/User.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRoute = Router();

userRoute.post('/register', userContoller.create);
userRoute.post('/auth', userContoller.login);
userRoute.get('/user/:id', authMiddleware, userContoller.index);

export { userRoute };
