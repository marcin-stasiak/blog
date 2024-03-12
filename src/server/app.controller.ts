import { Controller, Get, Next, Param, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';
import { parse } from 'url';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  public async client(@Req() request: Request, @Res() response: Response, @Next() next): Promise<void> {
    if (request.path === '/graphql') {
      next();
    }

    const parsedUrl = parse(request.url, true);
    await this.appService.client().render(request, response, parsedUrl.pathname, parsedUrl.query);
  }
}
