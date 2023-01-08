import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { UserConfig } from '@app/common/config/user.config';
import { BaseConfig } from '@app/common/config/base.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [UserConfig, BaseConfig],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
