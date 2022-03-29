import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá! Bem Vindo à Api do Clima :)';
  }
}
