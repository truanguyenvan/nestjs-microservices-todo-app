import { UserEntity } from '@app/repository/entities/user.entity';
import { UserRepositoryInterface } from '../../interface/user.repository.interface';
import { BaseAbstractOrmRepository } from '@app/repository/repositories/orm/base.abtract.repository'
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityId } from 'typeorm/repository/EntityId';
import { UserResponseDto } from '@app/repository';

@Injectable()
export class UserRepositoryImplement extends BaseAbstractOrmRepository<UserEntity> implements UserRepositoryInterface  {
    async createUser(data: UserEntity): Promise<void> {
        try {
            this.create(data);
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    async getUserById(id: EntityId): Promise<UserEntity> {
        try {
            return this.findById(id);
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}