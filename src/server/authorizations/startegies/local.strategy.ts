import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';

import { AuthorizationsService } from '../authorizations.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authorizationsService: AuthorizationsService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(username);
    console.log(password);
    const user = await this.authorizationsService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
