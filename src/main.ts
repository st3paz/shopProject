import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build(); 
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document); //путь localhost:3001/api
  await app.listen(3001); 
  await app.setGlobalPrefix('/api'); 
}
bootstrap();
