import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFaq extends Document {
  question: string;
  answer: string;
  displayOrder: number;
  active: boolean;
}

const FaqSchema: Schema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  displayOrder: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

const Faq: Model<IFaq> = mongoose.models.Faq || mongoose.model<IFaq>("Faq", FaqSchema);

export default Faq;
