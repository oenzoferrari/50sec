import { model, Schema, Document } from 'mongoose';

export interface Service extends Document {
  name: string;
  username: string;
  password_hash: string;
}

const ServiceSchema = new Schema({
  name: String,
  username: String,
  password_hash: String,
});

const Service = model<Service>('Service', ServiceSchema);

export default Service;
