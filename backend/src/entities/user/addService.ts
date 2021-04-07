import { ObjectId } from 'mongoose';

import UserModel from '../../models/User';
import ServiceModel from '../../models/Service';

export async function addService(
  userId: string | ObjectId,
  serviceId: string | ObjectId
) {
  const user = await UserModel.findById(userId);
  const service = await ServiceModel.findById(serviceId);

  if (!user || !service) {
    throw {
      error: 'User or service not found',
      code: 403,
    };
  }

  user.services.push(service._id);

  await user.save();
}
