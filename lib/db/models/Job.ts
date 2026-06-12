import { Schema, models, model } from "mongoose";

const JobDescriptionSchema = new Schema(
  {
    positionOverview: { type: String, default: "" },
    keyResponsibilities: [{ type: String }],
    qualifications: [{ type: String }],
    preferredSkills: [{ type: String }],
    whatWeOffer: [{ type: String }],
  },
  { _id: false },
);

const JobSchema = new Schema(
  {
    jobName: { type: String, required: true },
    jobCategory: { type: String, required: true },
    jobType: { type: String, default: "Full-time" },
    jobLocation: { type: String, default: "" },
    experienceLevel: { type: String, default: "" },
    validFrom: { type: Date, default: Date.now },
    validTill: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
    jobDescription: { type: JobDescriptionSchema, default: () => ({}) },
  },
  { timestamps: true },
);

export const Job = models.Job || model("Job", JobSchema);
