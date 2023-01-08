import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    uniqueItems: true,
    example: 'test1@denrox.com',
  })
  email: string;
  
  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  password: string;

  @ApiProperty({
    example: '1234567890',
  })
  phonenumber: number;

  @ApiProperty({
    example: 'abc',
  })
  username: number;

}
