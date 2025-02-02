import express from 'express';
import parser from 'body-parser';
import routes from './routes/router.js';
import configDotenv from 'dotenv';
import cors from 'cors';
import db from './infrastructure/database/db.js';

configDotenv.config();

console.log(`Connected to database... ${db.name}`);

const app = express();

const { HOST = localhost, PORT = 3000 } = process.env;
const { json, urlencoded } = parser;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://${HOST}:${PORT}/`);
});