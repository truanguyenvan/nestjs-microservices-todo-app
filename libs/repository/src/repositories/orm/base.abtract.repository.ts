import { BaseInterfaceOrmRepository } from './base.repository';
import { DeleteResult, Repository } from 'typeorm';
import { BaseEntity } from '@app/repository/entities/base.entity'
import { EntityId } from 'typeorm/repository/EntityId'
export abstract class BaseAbstractOrmRepository<T extends BaseEntity> implements BaseInterfaceOrmRepository<T> {

  protected readonly _repository: Repository<T>;
  
  constructor(repository: Repository<T>) {
    this._repository = repository
  }

  public async create(data: T | any): Promise<T> {
    return this._repository.save(data);
  }

  public async findByCondition(filterCondition: any): Promise<T> {
    return this._repository.findOne({where: filterCondition});
  }

  public async findAll(): Promise<T[]> {
    return this._repository.find();
  }

  public async findWithRelations(relations: any): Promise<T[]> {
    return this._repository.find(relations)
  }

  public async findById(id: EntityId): Promise<T> {
    return this._repository.findOne(id)
  }

  public async findByIds(ids: [EntityId]): Promise<T[]> {
    return this._repository.findByIds(ids)
  }

  public async update(id: EntityId, data: any): Promise<T> {
    await this._repository.update(id, data)
    return this.findById(id)
  }
  public async delete(id: EntityId): Promise<DeleteResult> {
    return this._repository.delete(id)
  }

}