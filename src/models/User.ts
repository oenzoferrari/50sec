import { model, Schema, Document } from 'mongoose';

import { Service } from './Service';

interface User extends Document {
  email: string;
  password_hash: string;
  services: Service[];
}

const UserSchema = new Schema({
  email: String,
  password_hash: String,
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
  ],
});

export default model<User>('User', UserSchema);
