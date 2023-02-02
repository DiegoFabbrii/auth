import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRoute } from './routes/user.route';

const app = express();
dotenv.config();

const port = 3004;

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
  app.use(express.json());
  app.use(userRoute);

  app.listen(port, () => console.log(`http://localhost:${port}`));
});
