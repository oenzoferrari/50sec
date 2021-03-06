import UserModel from '../../models/User';
import { Service } from '../../models/Service';

import { decypher } from '../../util/cipher';

interface UserProps {
  id: string;
  userKey: string;
}

interface UncipheredService {
  name: string;
  login?: string;
  password: string;
}

export async function getAll(userIdentification: UserProps) {
  const { id, userKey } = userIdentification;

  const user = await UserModel.findById(id, null, {
    populate: 'services',
  });

  if (!user) {
    throw {
      error: 'User not found',
      code: 404,
    };
  }

  const { services } = user;

  const uncypheredServices: UncipheredService[] = services.map((service) => {
    const _service = (service as unknown) as Service;

    return {
      name: _service.name,
      login: _service.login,
      password: decypher(_service.cypher, userKey),
    };
  });

  return uncypheredServices;
}
