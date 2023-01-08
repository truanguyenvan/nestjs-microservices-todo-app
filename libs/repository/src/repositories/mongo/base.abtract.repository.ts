import { FilterQuery, Model, QueryOptions, SaveOptions, UpdateQuery, UpdateWithAggregationPipeline, Document } from 'mongoose';
import { BaseInterfaceMongoRepository } from './base.repository';
import {
    UpdatedModel,
    CreatedModel
} from './/base.type'

export class BaseAbstractMongoRepository<T extends Document> implements BaseInterfaceMongoRepository<T> {
  protected readonly _repository: Model<T>;
  protected readonly _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  public async create(doc: object, saveOptions?: SaveOptions): Promise<T> {
    const createdEntity = new this._repository(doc);
    return await createdEntity.save(saveOptions);
  }

  async find(filter: FilterQuery<T>, options?: QueryOptions): Promise<T[]> {
    return await this._repository.find(filter, null, options);
  }

  async findById(id: string): Promise<T | null> {
    return await this._repository.findById(id);
  }

  async findAll(): Promise<T[]> {
    return await this._repository.find();
  }

  async remove(filter: FilterQuery<T>): Promise<T> {
    return await this._repository.remove(filter);
  }

  async updateOne(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdatedModel> {
    return await this._repository.updateOne(filter, updated, options);
  }

  async updateMany(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdatedModel> {
    return await this._repository.updateMany(filter, updated, options);
  }
}