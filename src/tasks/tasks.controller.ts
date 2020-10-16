import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/task';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return await this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return await this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return await this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.taskService.delete(id);
  }
}
