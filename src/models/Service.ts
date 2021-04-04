import { model, Schema, Document } from 'mongoose';

export interface Service extends Document {
  name: string;
  login: string;
  cypher: string;
}

const ServiceSchema = new Schema({
  name: String,
  login: String,
  cypher: String,
});

const Service = model<Service>('Service', ServiceSchema);

export default Service;
