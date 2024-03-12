import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { ArticleStatus } from '../dto/article-status.enum';

@ObjectType()
@Entity('articles')
export class Article extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public title: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  public excerpt?: string;

  @Field(() => String)
  @Column({ type: 'text' })
  public content: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'create_date' })
  public createDate: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'update_date' })
  public updateDate: Date;

  @Field(() => ArticleStatus)
  @Column({ type: 'enum', enum: ArticleStatus, default: ArticleStatus.Draft })
  public status: ArticleStatus;
}
