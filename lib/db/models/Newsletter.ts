import { Schema, models, model } from "mongoose";

const NewsletterSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Newsletter =
  models.Newsletter || model("Newsletter", NewsletterSchema);
