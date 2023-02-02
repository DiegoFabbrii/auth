import express from 'express';
import { userRoute } from './routes/user.route';
const app = express();

const port = 3004;

app.use(express.json());
app.use(userRoute);

app.listen(port, () => console.log(`http://localhost:${port}`));
