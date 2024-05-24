import { InputType, Field } from '@nestjs/graphql';

import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

import { UserGender } from './user-gender.enum';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field(() => String)
  public slug: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  public email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Field(() => String)
  public password: string;

  @Field(() => UserGender, { defaultValue: UserGender.Male })
  public gender: UserGender;
}
