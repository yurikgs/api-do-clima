import { Controller, Get, Param} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/swagger/error-bad-request-swagger';
import { TempoCidadeJsonTxt } from 'src/swagger/tempo-cidade-json-swagger';
import { TempoService } from './tempo.service';

@Controller('tempo')
@ApiTags("Clima por Cidade")
export class TempoController {
  constructor(private readonly tempoService: TempoService) {}

  @Get(':cidade')
  @ApiOperation({ summary: "Retorna o clima na cidade informada no path param, retorno em texto"})
  @ApiResponse({ status: 200, description: "Informações do clima retornadas com sucesso!" , type: String})
  @ApiResponse({ status: 400, description: "Parâmetros inválidos!", type: BadRequestSwagger})
  async findWeather(@Param('cidade') cidade: string) {

    let cidadeFixed = cidade.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '')
    
    return this.tempoService.findByCityName(cidade, cidadeFixed);
  }

  @Get('objeto/:cidade')
  @ApiOperation({ summary: "Retorna o clima na cidade informada no path param, retorno em formato json"})
  @ApiResponse({ status: 200, description: "Informações do clima retornadas com sucesso", type: TempoCidadeJsonTxt })
  @ApiResponse({ status: 400, description: "Parâmetros inválidos", type: BadRequestSwagger})
  async findWeatherObject(@Param('cidade') cidade: string) {

    let cidadeFixed = cidade.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '')

    return this.tempoService.findObjectByCityName(cidade, cidadeFixed);
  }

}
