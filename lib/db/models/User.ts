import { Schema, models, model } from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = models.User || model<IUser>("User", UserSchema);
