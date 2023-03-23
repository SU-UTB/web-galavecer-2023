import { IFacultyItem } from './IFacultyItem';

export interface IVoteItem {
  id: number | null;
  first_name: string;
  last_name: string;
  achievements: string[];
  faculty: IFacultyItem;
  faculty_id?: number;
  email?: string;
  created_at?: string;
  updated_at?: string;
}
