import { ObjectType, Field } from '@nestjs/graphql';

import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { UserGender } from '../dto/user-gender.enum';

@ObjectType()
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column()
  public username: string;

  @Column()
  public password: string;

  @Field(() => Date)
  @CreateDateColumn({ name: 'create_date' })
  public createDate: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'update_date' })
  public updateDate: Date;

  @Field(() => UserGender)
  @Column({ type: 'enum', enum: UserGender, default: UserGender.Male })
  public gender: UserGender;
}
