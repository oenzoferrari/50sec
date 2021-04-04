import { hash as bhash, compare as bcompare } from 'bcrypt';

const salt = process.env.HASH_SERVER_SALT;

export function hash(plaintext: string) {
  return bhash(plaintext + salt, 10);
}

export function compare(plaintext: string, hash: string) {
  return bcompare(plaintext + salt, hash);
}
