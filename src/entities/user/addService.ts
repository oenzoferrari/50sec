import { ObjectId } from 'mongoose';

import UserModel from '../../models/User';
import ServiceModel from '../../models/Service';

export async function addService(
  userId: string | ObjectId,
  serviceId: string | ObjectId
) {
  const user = await UserModel.findById(userId);
  const { _id } = await ServiceModel.findById(serviceId);

  if (!user || !_id) {
    throw {
      message: 'User or service not found',
      code: 403,
    };
  }

  user.services.push(_id);

  await user.save();
}
