import express from 'express';
import bodyParser from 'body-parser';
import router from './src/main/routes';
import connectDB from './src/config/dbConnection';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
connectDB();

app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
