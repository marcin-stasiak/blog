import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

import { ArticleStatus } from './article-status.enum';

@InputType()
export class CreateArticleInput {
  @IsNotEmpty()
  @Field(() => String)
  public slug: string;

  @IsNotEmpty()
  @Field(() => String)
  public title: string;

  @Field(() => String, { nullable: true })
  public excerpt?: string;

  @IsNotEmpty()
  @Field(() => String)
  public content: string;

  @Field(() => ArticleStatus, { defaultValue: ArticleStatus.Draft })
  public status: ArticleStatus;
}
