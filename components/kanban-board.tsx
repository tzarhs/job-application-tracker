"use client";

import { Board } from "@/lib/models/model.type";
import {
  Award,
  Calendar,
  CheckCircle2,
  Columns,
  Mic,
  XCircle,
} from "lucide-react";

//describe the requirement of the properties
interface KanbanBoardProps {
  board: Board;
  userId: string;
}

const COLUMN_CONFIG: Array<{ color: string; icon: React.ReactNode }> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="w-4 h-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="w-4 h-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="w-4 h-4" />,
  },
];

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
  const columns = board.columns;
  return (
    <>
      <div>
        <div>
          {columns.map((col, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-cyan-500",
              icon: <Calendar className="w-4 h-4" />,
            };
            return <></>;
          })}
        </div>
      </div>
    </>
  );
}
