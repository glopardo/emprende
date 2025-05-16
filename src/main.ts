import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // strips properties that are not in the DTO
    forbidNonWhitelisted: true, // throws error for extra props
    transform: true,            // automatically transform payloads to DTO instances
  }));
  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
