import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskFilterDto } from './dto/task-filter.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: TaskFilterDto): Promise<Task[]> {
    return this.taskservice.getTasks(filterDto);
  }

  @Get('/:id')
  getTaskByID(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskservice.getTaskByID(id);
  }

  @Delete('/:id')
  deleteTaskByID(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.taskservice.deleteTaskByID(id);
  }

  @Patch('/:id/status')
  updateTask(@Param('id') id: number, @Body('status') status: TaskStatus): Promise<Task> {
    return this.taskservice.updateTaskStatus(id, status);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskservice.createTask(createTaskDto);
  }
}
