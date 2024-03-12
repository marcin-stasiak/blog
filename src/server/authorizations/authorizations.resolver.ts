import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthorizationsService } from './authorizations.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login.response';
import { RegisterInput } from './dto/register.input';
import { RegisterResponse } from './dto/register.response';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthorizationsResolver {
  constructor(private readonly authorizationsService: AuthorizationsService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(LocalAuthGuard)
  public login(@Args('loginInput') loginInput: LoginInput) {
    return this.authorizationsService.login(loginInput);
  }

  @Mutation(() => RegisterResponse)
  public register(@Args('registerInput') registerInput: RegisterInput) {
    return this.authorizationsService.register(registerInput);
  }
}
