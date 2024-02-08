import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('articles')
export class Article extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column()
  public title: string;
}
