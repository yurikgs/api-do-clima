import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags("Boas Vindas")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: "Boas vindas e descrição básica em texto na tela da API" })
  getHello(): string {
    return this.appService.getHello();
  }
}
