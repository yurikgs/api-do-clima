import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TempoService {

  constructor(
    private axios: HttpService
  ){}


  async findByCityName(cidade: string) {

    const resp = await  lastValueFrom(
      this.axios.request({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&limit=1&APPID=8e1660642c23e1a6eb6eeaf6232fb492`})
    )
      const tempo = resp.data.weather[0].description
      const temperaturaMedia = resp.data.main.temp
      const maxima = resp.data.main.temp_max
      const minima = resp.data.main.temp_min
      const sensacao = resp.data.main.feels_like



    return `Clima de hoje em ${cidade}: ${tempo}, aproximadamente ${temperaturaMedia}°C. Máxima de ${maxima}°C e Mínima de ${minima}°C - a sensação térmica é de ${sensacao}°C`
  }

  async findObjectByCityName(cidade: string) {

    const resp = await  lastValueFrom(
      this.axios.request({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&limit=1&APPID=8e1660642c23e1a6eb6eeaf6232fb492`})
    )
      const tempo = resp.data.weather[0].description
      const temperaturaMedia = resp.data.main.temp
      const maxima = resp.data.main.temp_max
      const minima = resp.data.main.temp_min
      const sensacao = resp.data.main.feels_like

      const weather = {
        tempo,
        temperaturaMedia,
        maxima,
        minima,
        sensacao
      }


    return weather
  }
}
