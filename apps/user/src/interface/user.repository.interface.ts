import { UserEntity } from '@app/repository/entities/user.entity';
import { EntityId } from 'typeorm/repository/EntityId';

export interface UserRepositoryInterface {
    createUser: (user: UserEntity) => Promise<void>;
    getUserById: (id: EntityId) => Promise<UserEntity>;
}
