import crypto from 'crypto';

const algorithm = 'aes-256-ctr';

const serverKey = process.env.CYPHER_SERVER_KEY;

export function encypher(password: string, userKey: string) {
  const key = userKey + serverKey;

  const cipher = crypto.createCipher(algorithm, key);

  return cipher.update(password, 'utf-8', 'hex');
}

export function decypher(cipher: string, userKey: string) {
  const key = userKey + serverKey;

  const decipher = crypto.createDecipher(algorithm, key);

  return decipher.update(cipher, 'hex', 'utf-8');
}
