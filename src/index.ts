import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { userRoute } from './routes/userRoute';

const app = express();
dotenv.config();

const port = 3004;

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
  app.use(express.json());
  app.use(cors());
  app.use(userRoute);

  app.listen(port, () => console.log(`http://localhost:${port}`));
});
