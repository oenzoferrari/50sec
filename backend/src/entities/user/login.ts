import UserModel from '../../models/User';

import { compare } from '../../util/hash';

export async function login(email: string, password: string) {
  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    throw {
      error: 'Wrong email or password',
      code: 404,
    };
  }

  const correctPassword = await compare(password, user.hash);

  if (!correctPassword) {
    throw {
      error: 'Wrong email or password',
      code: 403,
    };
  }

  return {
    uid: user._id,
    userKey: password,
  };
}
