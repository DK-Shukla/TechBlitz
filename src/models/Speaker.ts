import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISpeaker extends Document {
  name: string;
  designation: string;
  company: string;
  domain: string;
  sessions: number;
  linkedin: string;
  image: string;
  active: boolean;
}

const SpeakerSchema: Schema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  domain: { type: String, required: true },
  sessions: { type: Number, required: true },
  linkedin: { type: String, required: true },
  image: { type: String, required: true },
  active: { type: Boolean, default: true },
});

const Speaker: Model<ISpeaker> = mongoose.models.Speaker || mongoose.model<ISpeaker>("Speaker", SpeakerSchema);

export default Speaker;
