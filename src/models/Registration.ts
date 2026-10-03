import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegistration extends Document {
  fullName: string;
  collegeName: string;
  email: string;
  year: string;
  semester: string;
  domains: string[];
  rollNumber: string;
  status: string;
  createdAt: Date;
}

const RegistrationSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  collegeName: { type: String, required: true },
  email: { type: String, required: true },
  year: { type: String, required: true },
  semester: { type: String, required: true },
  domains: { type: [String], required: true },
  rollNumber: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Registration: Model<IRegistration> = mongoose.models.Registration || mongoose.model<IRegistration>("Registration", RegistrationSchema);

export default Registration;
