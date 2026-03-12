"use client";

import { Board, Column } from "@/lib/models/model.type";
import {
  Award,
  Calendar,
  CheckCircle2,
  Columns,
  Mic,
  MoreHorizontal,
  MoreVertical,
  Trash2,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./create-job-catalog";

//describe the requirement of the properties
interface KanbanBoardProps {
  board: Board;
  userId: string;
}

interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
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

function DropableColumn({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
}) {
  return (
    <Card className="min-w-[300px] flex-shrink-0 shadow-md p-0">
      <CardHeader
        className={`${config.color} text-white rounded-t-lg pb-3 pt-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {config.icon}

            <CardTitle className="text-white text-base font-semibold">
              {column.name}
            </CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4">Delete Column</Trash2>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-4 bg-gray-50/50 min-h-[400px] rounded-b-lg">
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
      </CardContent>
    </Card>
  );
}

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
            return (
              <DropableColumn
                key={key}
                column={col}
                config={config}
                boardId={board._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
