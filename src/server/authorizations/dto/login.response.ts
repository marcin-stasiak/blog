import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../../endpoints/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  public accessToken: string;

  @Field(() => User)
  public user: User;
}
