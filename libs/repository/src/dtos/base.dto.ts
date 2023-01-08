import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../entities';

export class BaseDto {
  @ApiProperty({ example: 123456789 })
  id?: number;
  
  @ApiProperty({ example: 123456 })
  createdAt?: Date | string;

  @ApiProperty({ example: 654321 })
  updatedAt?: Date | string;

  constructor(entity: BaseEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
