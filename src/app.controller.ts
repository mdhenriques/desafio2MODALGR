import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('send-chat-message')
  async sendChatMessage(): Promise<AxiosResponse> {
    const response = await this.appService.sendChatMessage();
    return response.data.choices[0].message.content;
  }
}