import { TaskStatus } from '../task-status.enum';

export class TaskFilterDto {
  status: TaskStatus;
  search: string;
}
