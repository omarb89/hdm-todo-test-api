import { Injectable, BadRequestException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    
    if (!dto.name) {
      throw new BadRequestException('Task name is required');
    }

    try {
      return await this.taskRepository.save(dto);
    } catch (error) {
      throw new BadRequestException('Failed to save task');
    }
  }
}
