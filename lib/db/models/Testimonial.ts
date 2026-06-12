import { Schema, models, model } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, default: "client" },
    avatar: { type: String, default: "" },
  },
  { timestamps: true },
);

export const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);
