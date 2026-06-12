import { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    message: { type: String, required: true },
    contactedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Contact = models.Contact || model("Contact", ContactSchema);
