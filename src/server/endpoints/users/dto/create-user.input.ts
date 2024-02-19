import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

import { UserGender } from './user-gender.enum';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field(() => String)
  public slug: string;

  @IsNotEmpty()
  @Field(() => String)
  public username: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Field(() => String)
  public password: string;

  @Field(() => UserGender, { defaultValue: UserGender.Male })
  public gender: UserGender;
}
