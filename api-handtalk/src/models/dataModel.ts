import mongoose, { Schema, Document } from 'mongoose';

export interface DataDocument extends Document {
  device: string;
  os: string;
  origin: string;
  themeChangeCount: number;
  timestamp: Date;
  token: string; 
}

const DataSchema: Schema = new Schema({
  device: { type: String, required: true },
  os: { type: String, required: true },
  origin: { type: String, required: true },
  themeChangeCount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  token: { type: String, required: true }, 
});

export default mongoose.model<DataDocument>('Dado', DataSchema);