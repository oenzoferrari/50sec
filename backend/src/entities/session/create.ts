import { sign } from 'jsonwebtoken';

import { encypher } from '../../util/cipher';

const key = process.env.JWT_SIGNING_KEY;

export interface Payload {
  uid: string;
  userKey: string;
}

export function createSession(payload: Payload) {
  const { userKey } = payload;

  const cipher = encypher(userKey, '');

  payload.userKey = cipher;

  return sign(payload, key, {
    expiresIn: '1h',
  });
}
