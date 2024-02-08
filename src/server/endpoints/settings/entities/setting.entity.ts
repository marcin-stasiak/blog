import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('settings')
export class Setting extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column()
  public path: string;
}
