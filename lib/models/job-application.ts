import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  company: string;
  position: string;
  location?: string;
  status: string;
  userid: string;
  columnId: mongoose.Types.ObjectId;
  boardId: mongoose.Types.ObjectId;
  order: number;
  notes: string;
  salary?: number;
  jobUrl?: string;
  appliedDate?: Date;
  tags?: string[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Idea: Board -> Columns -> JobApplications

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String },
    status: { type: String, required: true, default: "Applied" },
    userid: { type: String, required: true, index: true },
    columnId: {
      type: Schema.Types.ObjectId,
      ref: "Column",
      required: true,
      index: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
      index: true,
    },
    order: { type: Number, required: true, default: 0 },
    notes: { type: String, default: "" },
    salary: { type: Number },
    jobUrl: { type: String },
    appliedDate: { type: Date },
    tags: [{ type: String }],
    description: { type: String },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

export default mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema); //check if exists otherwise create new model named 'JobApplication' with JobApplicationSchema
