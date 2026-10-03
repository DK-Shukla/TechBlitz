import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISession extends Document {
  number: number;
  date: string;
  time: string;
  title: string;
  domain: string;
  speakerName: string;
  description: string;
  gmeetLink: string;
  active: boolean;
}

const SessionSchema: Schema = new Schema({
  number: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  title: { type: String, required: true },
  domain: { type: String, required: true },
  speakerName: { type: String, required: true },
  description: { type: String, required: true },
  gmeetLink: { type: String, required: false, default: '' },
  active: { type: Boolean, default: true },
});

const Session: Model<ISession> = mongoose.models.Session || mongoose.model<ISession>("Session", SessionSchema);

export default Session;
