"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

interface CreateJobApplicationCatalogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationCatalog({
  columnId,
  boardId,
}: CreateJobApplicationCatalogProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <div className="space-y-2">
              <Label htmlFor="jobUrl">Job URL</Label>
              <Input id="jobUrl" placeholder="https://example.com/job" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" placeholder="React, Next.js, Tailwind CSS" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={3}
                placeholder="Describe the job role and responsibilities"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" rows={4} />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
