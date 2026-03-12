import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface CreateJobApplicationCatalogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationCatalog({
  columnId,
  boardId,
}: CreateJobApplicationCatalogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="w-full mb-4 justify-start text-muted-foreground"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Job
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogTitle>Add Job Application</DialogTitle>
        <DialogDescription>Track a new job application</DialogDescription>
        <form className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input id="position" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" placeholder="e.g., $100k - $150k" />
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
