import { Controller, Get, Param} from '@nestjs/common';
import { TempoService } from './tempo.service';

@Controller('tempo')
export class TempoController {
  constructor(private readonly tempoService: TempoService) {}

  @Get(':cidade')
  async findWeather(@Param('cidade') cidade: string) {

    let cidadeFixed = cidade.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '')
    
    return this.tempoService.findByCityName(cidade, cidadeFixed);
  }

  @Get('objeto/:cidade')
  async findWeatherObject(@Param('cidade') cidade: string) {

    let cidadeFixed = cidade.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '')

    return this.tempoService.findObjectByCityName(cidade, cidadeFixed);
  }

}
