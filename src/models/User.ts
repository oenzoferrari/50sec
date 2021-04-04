import { model, Schema, Document, ObjectId } from 'mongoose';

interface User extends Document {
  email: string;
  hash: string;
  services: ObjectId[];
}

const UserSchema = new Schema({
  email: String,
  hash: String,
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
  ],
});

export default model<User>('User', UserSchema);
