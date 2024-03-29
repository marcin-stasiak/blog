import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

(async function () {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);

  await app.listen(config.get('port'));
})();
