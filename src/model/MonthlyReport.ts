import { DailyReport } from './DailyReport';

export interface MonthlyReport {
  Month: Date;
  Daylies: Array<DailyReport>;
  Hours: number;
  Credit: number;
  Publication: number;
  Videos: number;
  ReturnVisits: number;
  Studies: number;
  Note: string;
}