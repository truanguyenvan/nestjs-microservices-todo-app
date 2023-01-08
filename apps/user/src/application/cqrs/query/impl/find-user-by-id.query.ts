import { IQuery } from '@nestjs/cqrs';
import { EntityId } from 'typeorm/repository/EntityId';
export class FindUserByIdQuery implements IQuery {
  constructor(public readonly id: EntityId) {}
}
