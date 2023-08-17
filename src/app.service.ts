import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class AppService {  

  async sendChatMessage(): Promise<AxiosResponse> {    

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    };

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Tell me a fortune cookie phrase.'
        }
      ]
    };

    return axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
  }
}
