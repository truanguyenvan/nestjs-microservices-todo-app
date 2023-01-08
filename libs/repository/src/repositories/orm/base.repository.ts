import { DeleteResult } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId'

export interface BaseInterfaceOrmRepository<T> {
  create(data: T | any): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  findWithRelations(relations: any): Promise<T[]>;

  findById(id: EntityId): Promise<T>

  findByIds(id: [EntityId]): Promise<T[]>

  update(id: EntityId, data: any): Promise<T>

  delete(id: EntityId): Promise<DeleteResult>
}