import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "apps/user/src/application/cqrs/command/impl";
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { UserRepositoryImplement } from "apps/user/src/infrastructure/repository/UserRepositoryImplement";
import { UserResponseDto } from "@app/repository/dtos/responses";
import { Transaction } from "typeorm";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    logger = new Logger(this.constructor.name);
    constructor(
        private readonly userRepository: UserRepositoryImplement,
      ) {}
    async execute(command: CreateUserCommand): Promise<void> {
        this.logger.log(`Async ${command.constructor.name}...`);
        const { user } = command;
        try {
            await this.userRepository.createUser(user)
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}