import { verify } from 'jsonwebtoken';

import { Payload } from './create';

import { decypher } from '../../util/cipher';

const key = process.env.JWT_SIGNING_KEY;

export async function verifyToken(token: string) {
  let content: Payload;

  try {
    content = verify(token, key) as Payload;
  } catch {
    throw {
      error: 'Invalid token',
      code: 403,
    };
  }

  content.userKey = decypher(content.userKey, '');

  return content;
}
