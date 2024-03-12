import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../endpoints/users/users.module';
import { AuthorizationsResolver } from './authorizations.resolver';
import { AuthorizationsService } from './authorizations.service';
import { JwtStrategy } from './startegies/jwt.strategy';
import { LocalStrategy } from './startegies/local.strategy';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          secret: config.get('app.secret'),
        }) as JwtModuleOptions,
      inject: [ConfigService],
    }),
    PassportModule,
    UsersModule,
  ],
  providers: [AuthorizationsService, AuthorizationsResolver, JwtStrategy, LocalStrategy],
})
export class AuthorizationsModule {}
