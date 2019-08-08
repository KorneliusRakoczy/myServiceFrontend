import { MonthlyReport } from './MonthlyReport';

export interface YearlyReport {
  Year: Number;
  Months: Array<MonthlyReport>;
  Hours: number;
  Credit: number;
  Publication: number;
  Videos: number;
  ReturnVisits: number;
  Studies: number;
  Note: string;
}