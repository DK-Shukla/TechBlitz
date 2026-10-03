import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITheme extends Document {
  primaryBackground: string;
  secondaryBackground: string;
  cardBackground: string;
  primaryText: string;
  secondaryText: string;
  border: string;
  primaryAccent: string;
  secondaryAccent: string;
  buttonBackground: string;
  buttonText: string;
  hoverColor: string;
  errorColor: string;
  successColor: string;
  headingFont: string;
  bodyFont: string;
  active: boolean;
}

const ThemeSchema: Schema = new Schema({
  primaryBackground: { type: String, required: true },
  secondaryBackground: { type: String, required: true },
  cardBackground: { type: String, required: true },
  primaryText: { type: String, required: true },
  secondaryText: { type: String, required: true },
  border: { type: String, required: true },
  primaryAccent: { type: String, required: true },
  secondaryAccent: { type: String, required: true },
  buttonBackground: { type: String, required: true },
  buttonText: { type: String, required: true },
  hoverColor: { type: String, required: true },
  errorColor: { type: String, required: true },
  successColor: { type: String, required: true },
  headingFont: { type: String, required: true },
  bodyFont: { type: String, required: true },
  active: { type: Boolean, default: false },
});

const Theme: Model<ITheme> = mongoose.models.Theme || mongoose.model<ITheme>("Theme", ThemeSchema);

export default Theme;
