import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOutreachPartner extends Document {
  name: string;
  logo: string;
  website: string;
  instagram: string;
  description: string;
  displayOrder: number;
  active: boolean;
}

const OutreachPartnerSchema: Schema = new Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  website: { type: String },
  instagram: { type: String },
  description: { type: String, required: true },
  displayOrder: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

const OutreachPartner: Model<IOutreachPartner> = mongoose.models.OutreachPartner || mongoose.model<IOutreachPartner>("OutreachPartner", OutreachPartnerSchema);

export default OutreachPartner;
