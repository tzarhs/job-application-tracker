import mongoose, { Schema, Document } from "mongoose";

export interface IBoard extends Document {
  name: string;
  userId: string;
  columns: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const BoardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true, index: true }, //index: querying will be faster when searching by userId
    columns: [{ type: Schema.Types.ObjectId, ref: "Column" }], //ref to Column model
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

export default mongoose.models.Board ||
  mongoose.model<IBoard>("Board", BoardSchema); //check if exists otherwise create new model named 'Board' with BoardSchema
