import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TempoService {

  constructor(
    private axios: HttpService
  ){}


  async findByCityName(cidade: string, cidadeFixed: string) {

    let resp

    try {
      resp = await  lastValueFrom(
        this.axios.request({
          method: 'GET',
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cidadeFixed}&lang=pt_br&units=metric&limit=1&APPID=8e1660642c23e1a6eb6eeaf6232fb492`})
      )  
    } catch (error) {
      return "Cidade não encontrada! Favor verifique o nome da cidade e tente novamente."
    }
    

      const tempo = resp.data.weather[0].description
      const temperaturaMedia = resp.data.main.temp
      const maxima = resp.data.main.temp_max
      const minima = resp.data.main.temp_min
      const sensacao = resp.data.main.feels_like

    

    return `Clima de hoje em ${cidade}: ${tempo}, aproximadamente ${temperaturaMedia}°C. Máxima de ${maxima}°C e Mínima de ${minima}°C - a sensação térmica é de ${sensacao}°C`
  }

  async findObjectByCityName(cidade: string, cidadeFixed:string) {

    let resp

    try {
      resp = await  lastValueFrom(
        this.axios.request({
          method: 'GET',
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cidadeFixed}&lang=pt_br&units=metric&limit=1&APPID=8e1660642c23e1a6eb6eeaf6232fb492`})
      )
    } catch (error) {
      throw new BadRequestException("Cidade Não Encontrada!")
    }



      const tempo = resp.data.weather[0].description
      const temperaturaMedia = resp.data.main.temp
      const maxima = resp.data.main.temp_max
      const minima = resp.data.main.temp_min
      const sensacao = resp.data.main.feels_like

      const weather = {
        cidade,
        tempo,
        temperaturaMedia,
        maxima,
        minima,
        sensacao
      }


    return weather
  }
}
