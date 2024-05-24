import { ObjectType, Field } from '@nestjs/graphql';

import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { UserGender } from '../dto/user-gender.enum';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Field(() => String)
  @Column({ unique: true })
  public email: string;

  // @Column({ select: false })
  @Column()
  public password: string;

  @Field(() => UserGender)
  @Column({ type: 'enum', enum: UserGender, default: UserGender.Male })
  public gender: UserGender;

  @Field(() => Date)
  @CreateDateColumn({ name: 'create_date' })
  public createDate: Date;

  @Field(() => Date)
  @UpdateDateColumn({ name: 'update_date' })
  public updateDate: Date;
}
