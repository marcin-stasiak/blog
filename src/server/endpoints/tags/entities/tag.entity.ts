import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('tags')
export class Tag extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column()
  public title: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'create_date' })
  public createDate: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'update_date' })
  public updateDate: Date;
}
