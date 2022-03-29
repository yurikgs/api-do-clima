import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



const welcome = () => {
  console.log(`\n ╔══════════════════════════════════════════════════════╗\n ║                                                      ║\n ║       Seja muito bem-vindo à API do Clima!           ║\n ║                                                      ║\n ╚══════════════════════════════════════════════════════╝`);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  welcome()
}
bootstrap();
