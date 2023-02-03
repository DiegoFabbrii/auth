import { Router } from 'express';
import { userContoller } from '../controllers/User.controller';

const userRoute = Router();

userRoute.post('/register', userContoller.create);

export { userRoute };
