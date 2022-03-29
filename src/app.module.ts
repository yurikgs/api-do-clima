import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempoModule } from './tempo/tempo.module';

@Module({
  imports: [TempoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
