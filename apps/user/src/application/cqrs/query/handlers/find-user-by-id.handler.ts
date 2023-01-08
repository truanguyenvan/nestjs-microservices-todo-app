import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindUserByIdQuery } from "../impl/find-user-by-id.query";
import { UserRepositoryImplement } from "apps/user/src/infrastructure/repository/UserRepositoryImplement";
import { UserResponseDto } from "@app/repository";
import { InternalServerErrorException, Logger } from "@nestjs/common";

@QueryHandler(FindUserByIdQuery)
export class FindUserByIdHandler implements IQueryHandler<FindUserByIdQuery> {
    logger = new Logger(this.constructor.name);

    constructor(
        private readonly userRepository: UserRepositoryImplement
    ) {}
    
    async execute(query: FindUserByIdQuery): Promise<UserResponseDto> {
        this.logger.log(`Async ${query.constructor.name}`);

        const {id} = query;

        try {
            const user = await this.userRepository.getUserById(id);

            return {
                message: "OK",
                data: user,
                errors: null
            }
        } catch (e) {
            this.logger.error(e);
            throw new InternalServerErrorException(e)
        }
        
    }
}