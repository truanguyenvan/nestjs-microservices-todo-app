import { Column, Entity } from 'typeorm';
import { 
  IsEmail, 
  IsString, 
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsPhoneNumber } from 'class-validator';
import { UserResponseDto } from '@app/repository/dtos/responses/user.response';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity<UserResponseDto> {
  @MinLength(2)
  @MaxLength(40)
  @IsString()
  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;
  
  @Column()
  is_confirmed: boolean = false;

  @IsNotEmpty()
  @MinLength(6)
  @Column()
  password: string;

  @Column()
  @IsPhoneNumber()
  phonenumber: number;

  toDtoClass?: new (entity: BaseEntity, options?: any) => UserResponseDto;
}
