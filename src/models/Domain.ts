import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDomain extends Document {
  name: string;
  icon: string;
  description: string;
  displayOrder: number;
  active: boolean;
}

const DomainSchema: Schema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  displayOrder: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

const Domain: Model<IDomain> = mongoose.models.Domain || mongoose.model<IDomain>("Domain", DomainSchema);

export default Domain;
