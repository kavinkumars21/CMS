import mongoose from "mongoose";
import { UserModel } from "./UserSchema.js";

const ComplaintSchema = new mongoose.Schema(
    {
        User: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            required: true,
        },
        Type: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const ComplaintModel = new mongoose.model("Complaints", ComplaintSchema);