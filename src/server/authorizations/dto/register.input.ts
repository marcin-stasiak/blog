import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field()
  public username: string;

  @Field()
  public password: string;
}
