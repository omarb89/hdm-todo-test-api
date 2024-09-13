import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase'; // Importation du SaveTaskUseCase

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase; // Ajouter SaveTaskUseCase ici

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
