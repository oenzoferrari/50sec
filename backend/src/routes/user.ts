import { Router } from 'express';

import { createUser } from '../entities/user/create';
import { login } from '../entities/user/login';

import { createSession } from '../entities/session/create';

const router = Router();

router.post('/', async (req, res) => {
  const { email, password, confirmation } = req.body;

  if (!email || !password || !confirmation) {
    return res.status(403).send({
      error: 'Missing parameters',
    });
  }

  if (password !== confirmation) {
    return res.status(403).send({
      error: "Passwords don't match",
    });
  }

  try {
    await createUser({
      email,
      password,
    });
  } catch ({ code, error }) {
    return res.status(code).send({ error });
  }

  return res.sendStatus(201);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(403).send({ error: 'Missing fields' });
  }

  let sessionArgs;

  try {
    sessionArgs = await login(email, password);
  } catch ({ code, error }) {
    return res.status(code).send({ error });
  }

  res.cookie('token', createSession(sessionArgs));

  return res.sendStatus(200);
});

export default router;
