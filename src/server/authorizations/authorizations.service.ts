import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../endpoints/users/users.service';
import { LoginInput } from './dto/login.input';

class RegisterInput {}

@Injectable()
export class AuthorizationsService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  public async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    console.log(user);
    // console.log(username);
    // console.log(password);

    if (username && user.password === password) {
      return user;
    }

    return null;
  }

  public async login(loginInput: LoginInput) {
    // TODO: pass user from context in resolver
    // TODO: implement access and refresh tokens
    console.log('login');
    const { id, email, password, slug, gender, createDate, updateDate } = await this.usersService.findOneByUsername(
      loginInput.username,
    );

    return {
      accessToken: this.jwtService.sign({
        id: id,
        email: email,
      }),
      user: {
        slug,
        gender,
        createDate,
        updateDate,
      },
    };
  }

  public async register(registerInput: RegisterInput) {
    console.log(registerInput);
  }
}
