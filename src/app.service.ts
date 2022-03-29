import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let message: string = 'Olá! Bem Vindo(a) à Api do Clima! :) -----------------------> Acesse o endpoint "/tempo/Nome da Cidade" para acessar as informações climáticas de sua cidade. Se quiser ver um objeto com essas informações, acesse o endpoint "/tempo/objeto/Nome da Cidade"' 
    return message
  }
}
