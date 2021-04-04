import crypto from 'crypto';

const algorithm = 'aes-256-ctr';

const serverKey = process.env.CYPHER_SERVER_KEY;

export function encypher(password: string, userKey: string) {
  const cipher = crypto.createCipheriv(algorithm, userKey + serverKey, null);

  return cipher.update(password, 'utf8', 'hex');
}

export function decypher(cipher: string, userKey: string) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    userKey + serverKey,
    null
  );

  return decipher.update(cipher, 'hex', 'utf8');
}
