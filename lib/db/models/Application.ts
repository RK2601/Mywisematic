import { Schema, models, model } from "mongoose";

const ApplicationSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    jobName: { type: String, required: true },
    appliedAt: { type: Date, default: Date.now },
    coverLetter: { type: String, default: "" },
    cvResume: { type: String, default: "" },
  },
  { timestamps: true },
);

export const Application =
  models.Application || model("Application", ApplicationSchema);
