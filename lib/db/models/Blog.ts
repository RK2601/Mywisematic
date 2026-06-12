import { Schema, models, model } from "mongoose";

const ContentSectionSchema = new Schema(
  {
    type: { type: String, default: "paragraph" },
    content: { type: String, required: true },
    id: { type: String },
  },
  { _id: true },
);

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: [ContentSectionSchema],
    thumbnail: { type: String, default: "" },
    creationDate: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Blog = models.Blog || model("Blog", BlogSchema);
