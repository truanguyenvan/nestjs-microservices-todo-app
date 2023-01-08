import { UserEntity } from '@app/repository/entities/user.entity';

export interface IServiceUserCreateResponse {
  status: number;
  message: string;
  user: UserEntity | null;
  errors: { [key: string]: any } | null;
}
