import validator from 'validator';

import UserModel from '../../models/User';

import { hash as uhash } from '../../util/hash';

interface UserProps {
  email: string;
  password: string;
}

export async function createUser(user: UserProps) {
  const { email, password } = user;

  if (!validator.isEmail(email)) {
    throw {
      error: 'Invalid email',
      code: 403,
    };
  }

  const isStrongPassword = !validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  if (!isStrongPassword) {
    throw {
      error: 'Weak password',
      code: 403,
    };
  }

  const hash = await uhash(password);

  const { _id } = await UserModel.create({
    email,
    hash,
  });

  if (!_id) {
    throw {
      error: 'Could not create user',
      code: 500,
    };
  }

  return _id;
}
