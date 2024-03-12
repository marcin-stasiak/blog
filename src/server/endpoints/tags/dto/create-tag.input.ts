import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTagInput {
  @IsNotEmpty()
  @Field(() => String)
  public slug: string;

  @IsNotEmpty()
  @Field(() => String)
  public title: string;
}
