import { Router } from 'express';

const router = Router();

router.post('/', async (_, res) => {
  return res.send({ message: 'Hello, world' });
});

export default router;
