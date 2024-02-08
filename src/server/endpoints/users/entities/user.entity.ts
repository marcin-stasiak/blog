import { ObjectType, Field } from '@nestjs/graphql';

import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column()
  public name: string;
}
