import { BaseConfig } from '@app/common/config/base.config';
import { UserConfig } from '@app/common/config/user.config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserModule } from './user.module';

async function bootstrap() {
  const baseAppConfig = BaseConfig().app;
  const userAppConfig = UserConfig().app;
  const host = baseAppConfig.host;
  const port = userAppConfig.port
  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: host,
      port: port,
    },
  };

  const app = await NestFactory.createMicroservice(UserModule, microserviceOptions);
  app.listen();
  Logger.log(`User service listning on port ${host}:${port}`)
}
bootstrap();
