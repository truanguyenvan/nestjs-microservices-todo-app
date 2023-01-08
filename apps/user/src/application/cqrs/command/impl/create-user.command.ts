import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@app/repository/entities/user.entity';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly user: UserEntity,
  ) {}
}
