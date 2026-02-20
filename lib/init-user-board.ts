import connectDB from "./db";
import { Board, Column } from "./models";
import jobApplication from "./models/job-application";

const DEFAULT_COLUMNS = [
  { name: "Applied", order: 0 },
  { name: "Interviewed", order: 1 },
  { name: "Offer", order: 2 },
  { name: "Rejected", order: 3 },
];

//we need to know who user is creating the board so we pass his id as an argument
export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();

    // check if board already exists for the user
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

    if (existingBoard) {
      return existingBoard;
    }

    // if board doesn't exist, create a new one
    //to add items to collections mongoose provides .create()
    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    // first create an empty board because we dont have the column id
    // create default columns
    //Promise.all lets you run all of the creation operations at the same time
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplications: [],
        }),
      ),
    );

    // Update the board with the new column ids
    board.columns = columns.map((col) => col._id);
    await board.save();

    return board;
  } catch (error) {
    console.error("Error initializing user board:", error);
    throw error;
  }
}
