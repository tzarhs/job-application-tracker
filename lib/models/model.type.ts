export interface Board {
  _id: string;
  name: string;
  columns: Column[];
}
export interface Column {
  _id: string;
  name: string;
  order: number;
  jobApplication: JobApplication[];
}
export interface JobApplication {
  _id: string;
  company: string;
  location?: string;
  status: string;
  note?: string;
  salary?: number;
  jobUrl?: string;
  order: number;
  columnId: string;
  tags?: string[];
  description?: string;
}
