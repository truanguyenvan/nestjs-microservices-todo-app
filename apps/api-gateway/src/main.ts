import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('API docs')
  .addTag('users')
  .addTag('tasks')
  .setVersion('1.0')
  .build();

  await app.listen(3000);
}
bootstrap();
