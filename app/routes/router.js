import { express } from 'express';

const router = express.Router();

express.get('/', (res) => {
    console.info('GET /');
    res.status(200).json({ message: 'Hello, world!' });
});

export default router;