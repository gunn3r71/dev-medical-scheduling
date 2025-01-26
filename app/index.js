import { express } from 'express';
import { parser } from 'body-parser';
import { cors } from 'cors';
import { routes } from './routes/router.js';

const app = express();

const { PORT = 3000 } = process.env;
const { json, urlencoded } = parser;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});