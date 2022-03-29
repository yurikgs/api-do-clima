import { Controller, Get, Param} from '@nestjs/common';
import { TempoService } from './tempo.service';

@Controller('tempo')
export class TempoController {
  constructor(private readonly tempoService: TempoService) {}

  @Get(':cidade')
  async findWeather(@Param('cidade') cidade: string) {
    return this.tempoService.findByCityName(cidade);
  }

  @Get('objeto/:cidade')
  async findWeatherObject(@Param('cidade') cidade: string) {
    return this.tempoService.findObjectByCityName(cidade);
  }

}
