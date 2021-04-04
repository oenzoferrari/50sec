import { randomPassword } from 'secure-random-password';

import ServiceModel from '../../models/Service';

import { encypher } from '../../util/cipher';

interface CreationProps {
  name: string;
  login: string;
}

export async function createService(
  service: CreationProps,
  userKey: string,
  length: number = 25
) {
  const { name, login } = service;

  const password = randomPassword({
    length,
  });

  const cypher = encypher(password, userKey);

  const { _id } = await ServiceModel.create({
    name,
    login,
    cypher,
  });

  if (!_id) {
    throw {
      error: 'Could not create server',
      code: 500,
    };
  }

  return _id;
}
