import UserModel from '../../models/User';

import { decypher } from '../../util/cipher';

interface UserProps {
  id: string;
  userKey: string;
}

export async function createService(userIdentification: UserProps) {
  const { id, userKey } = userIdentification;

  const { services } = await UserModel.findById(id, null, {
    populate: 'services',
  });

  const uncypheredServices = services.map(({ cypher }) => {
    decypher(cypher, userKey);
  });

  return uncypheredServices;
}
