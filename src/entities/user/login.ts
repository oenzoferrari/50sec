import UserModel from '../../models/User';

import { compare } from '../../util/hash';

export async function login(email: string, password: string) {
  const { hash, _id } = await UserModel.findOne({
    email,
  });

  if (!_id) {
    throw {
      message: 'Email or password wrong',
      code: 403,
    };
  }

  const correctPassword = await compare(password, hash);

  if (!correctPassword) {
    throw {
      message: 'Email or password wrong',
      code: 403,
    };
  }

  return {
    uid: _id,
    userKey: password,
  };
}
