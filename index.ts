// src/index.ts

import express from 'express';
import bodyParser from 'body-parser';
import router from './src/main/routes';
import connectDB from './src/config/dbConnection';

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
