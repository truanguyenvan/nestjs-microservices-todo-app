import { 
    FilterQuery, 
    QueryOptions, 
    SaveOptions, 
    UpdateQuery, 
    UpdateWithAggregationPipeline } from 'mongoose';

import { UpdatedModel } from './/base.type'

export interface BaseInterfaceMongoRepository<T> {
    create(doc: T, saveOptions: SaveOptions): Promise<T>;

    find(filter: FilterQuery<T>, options: QueryOptions): Promise<T[]>;

    findById(id: string): Promise<T | null>;

    findAll(): Promise<T[]>;

    remove(filter: FilterQuery<T>): Promise<T>;

    updateOne(    
        filter: FilterQuery<T>,
        updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
        options?: QueryOptions,
        ): Promise<UpdatedModel>;

    updateMany(    
        filter: FilterQuery<T>,
        updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
        options?: QueryOptions,
        ): Promise<UpdatedModel>;
  }

