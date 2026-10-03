import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISponsor extends Document {
  name: string;
  logo: string;
  description: string;
  instagram: string;
  website: string;
  active: boolean;
  displayOrder: number;
}

const SponsorSchema: Schema = new Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  description: { type: String, required: true },
  instagram: { type: String },
  website: { type: String },
  active: { type: Boolean, default: true },
  displayOrder: { type: Number, required: true },
});

const Sponsor: Model<ISponsor> = mongoose.models.Sponsor || mongoose.model<ISponsor>("Sponsor", SponsorSchema);

export default Sponsor;
