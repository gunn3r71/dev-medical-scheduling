import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.info('GET /');
    res.status(200).json({ message: 'Hello, world!' });
});

export default router;