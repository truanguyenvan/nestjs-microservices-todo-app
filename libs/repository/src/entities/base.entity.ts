import { AggregateRoot } from '@nestjs/cqrs';
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    VersionColumn
   } from 'typeorm';

import { BaseDto } from '../dtos';
import { IsString } from 'class-validator';

@Entity()
export abstract class BaseEntity<
  T extends BaseDto = BaseDto
> extends AggregateRoot {
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    @IsString()
    createdBy?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date | null;

    @Column()
    deleted?: boolean = false;
    
    @VersionColumn()
    version?: number;

    toDtoClass?: new (entity: BaseEntity, options?: any) => T;
    // toDto = (options?: any) => DtoMapperUtils.toDto(this.toDtoClass, this, options);
}
