import { InputType, Field } from '@nestjs/graphql';

import { IsUUID } from 'class-validator';

@InputType()
export class UpdateSettingInput {
  @IsUUID()
  @Field(() => String)
  public id: string;

  @Field(() => String)
  public path: string;
}
