import { model, Schema, Document } from 'mongoose';

export interface Service extends Document {
  name: string;
  login?: string;
  cypher: string;
}

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  login: String,
  cypher: {
    type: String,
    required: true,
  },
});

const Service = model<Service>('Service', ServiceSchema);

export default Service;
