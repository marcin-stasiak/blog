import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsNotEmpty()
  @Field(() => String)
  public slug: string;

  @Field(() => String)
  @IsNotEmpty()
  public title: string;
}
