import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateSettingInput {
  @IsUUID()
  @Field(() => String)
  public id: string;

  @IsNotEmpty()
  @Field(() => String)
  public path: string;

  @Field(() => String)
  public value: string;
}
