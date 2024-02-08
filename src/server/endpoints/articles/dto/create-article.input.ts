import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => String)
  public title: string;
}
