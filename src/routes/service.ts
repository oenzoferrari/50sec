import { Router } from 'express';

import { createService } from '../entities/service/create';
import { getAll } from '../entities/service/getAll';
import { Payload } from '../entities/session/create';

import { verifyToken } from '../entities/session/verify';

import { addService } from '../entities/user/addService';

const router = Router();

router.post('/', async (req, res) => {
  const { name, login, length } = req.body;

  if (!name || !login) {
    return res.status(400).send({ error: 'Missing parameters' });
  }

  const { token } = req.cookies;

  if (!token) {
    return res.status(403).send({ error: 'Missing authentication' });
  }

  let payload: Payload;

  try {
    payload = await verifyToken(token);
  } catch ({ error, code }) {
    return res.status(code).send({ error });
  }

  let serviceId: any;

  try {
    serviceId = await createService(
      {
        login,
        name,
      },
      payload.userKey,
      length
    );
  } catch ({ error, code }) {
    return res.status(code).send({ error });
  }

  try {
    await addService(payload.uid, serviceId);
  } catch ({ error, code }) {
    return res.status(code).send({ error });
  }

  return res.send(201).send();
});

router.get('/', async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(403).send({ error: 'Missing authentication' });
  }

  let payload: Payload;

  try {
    payload = await verifyToken(token);
  } catch ({ code, error }) {
    return res.status(code).send({ error });
  }

  const services = await getAll({
    id: payload.uid,
    userKey: payload.userKey,
  });

  return res.send({ services });
});

export default router;
