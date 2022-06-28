import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


const welcome = () => {
  console.log(`\n ╔══════════════════════════════════════════════════════╗\n ║                                                      ║\n ║       Seja muito bem-vindo à API do Clima!           ║\n ║                                                      ║\n ╚══════════════════════════════════════════════════════╝`);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**SWAGGER UI CONFIG */
  const config = new DocumentBuilder()
  .setTitle('API do Tempo')
  .setDescription('Endpoints da API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);

  welcome()
}
bootstrap();
