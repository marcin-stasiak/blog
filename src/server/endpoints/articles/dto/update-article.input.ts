import { InputType, Field, PartialType } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

import { CreateArticleInput } from './create-article.input';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @IsUUID()
  @Field(() => String)
  public id: string;
}
