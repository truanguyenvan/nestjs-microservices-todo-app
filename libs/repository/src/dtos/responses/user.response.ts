import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@app/repository/entities/user.entity'
import { BaseDto } from '@app/repository/dtos/base.dto';

export abstract class UserResponseDto extends BaseDto {
  @ApiProperty({ example: 'user_create_success' })
  message: string;
  @ApiProperty({
    example: {
        email: 'test@denrox.com',
        is_confirmed: false,
        id: '5d987c3bfb881ec86b476bcc',
        phonenumber: '0123456789',
        username: '123456789'
    },
  })
  data: UserEntity;

  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
