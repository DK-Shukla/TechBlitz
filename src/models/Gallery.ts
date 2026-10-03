import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGallery extends Document {
  url: string;
  category: "Team" | "Inauguration";
  alt: string;
  displayOrder: number;
  active: boolean;
}

const GallerySchema: Schema = new Schema({
  url: { type: String, required: true },
  category: { type: String, enum: ["Team", "Inauguration"], required: true },
  alt: { type: String, required: true },
  displayOrder: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

const Gallery: Model<IGallery> = mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", GallerySchema);

export default Gallery;
