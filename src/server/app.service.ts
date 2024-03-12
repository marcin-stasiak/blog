import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import createClient from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger: Logger;
  private instance: NextServer;

  constructor(private readonly config: ConfigService) {
    this.logger = new Logger(AppService.name);
  }

  public async onModuleInit(): Promise<void> {
    try {
      this.instance = createClient({
        dev: this.config.get('development'),
        dir: './src/client',
      });

      await this.instance.prepare();
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  public client(): NextServer {
    return this.instance;
  }
}
