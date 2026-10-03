import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISiteSettings extends Document {
  eventName: string;
  organizer: string;
  guidance: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDates: string;
  registrationDeadline: Date;
  registrationOpen: boolean;
  whatsappLink: string;
  contactEmail: string;
  instagram: string;
  linkedin: string;
  github: string;
  department: string;
}

const SiteSettingsSchema: Schema = new Schema({
  eventName: { type: String, required: true },
  organizer: { type: String, required: true },
  guidance: { type: String, required: true },
  heroTitle: { type: String, required: true },
  heroSubtitle: { type: String, required: true },
  heroDates: { type: String, required: true },
  registrationDeadline: { type: Date, required: true },
  registrationOpen: { type: Boolean, default: false },
  whatsappLink: { type: String, required: true },
  contactEmail: { type: String, required: true },
  instagram: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  department: { type: String, required: true },
});

const SiteSettings: Model<ISiteSettings> = mongoose.models.SiteSettings || mongoose.model<ISiteSettings>("SiteSettings", SiteSettingsSchema);

export default SiteSettings;
