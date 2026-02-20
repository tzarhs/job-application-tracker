import mongoose, { Schema, Document } from "mongoose";

export interface IColumn extends Document {
  name: string;
  boardId: mongoose.Types.ObjectId;
  order: number;
  jobApplications: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// Idea: Board -> Columns -> JobApplications

const ColumnSchema = new Schema<IColumn>(
  {
    name: { type: String, required: true },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
      index: true,
    }, //index: querying will be faster when searching by userId
    order: { type: Number, required: true, default: 0 },
    jobApplications: [{ type: Schema.Types.ObjectId, ref: "JobApplication" }], //ref to JobApplication model
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

export default mongoose.models.Column ||
  mongoose.model<IColumn>("Column", ColumnSchema); //check if exists otherwise create new model named 'Column' with ColumnSchema
