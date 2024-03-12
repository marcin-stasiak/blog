import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  public async create(createUser: CreateUserInput): Promise<User> {
    const user = this.repository.create(createUser);

    return await this.repository.save(user);
  }

  public async findAll(limit: number = 30, offset: number = 0): Promise<User[]> {
    return await this.repository.find({ take: limit, skip: offset });
  }

  public async findOneById(id: string): Promise<User> {
    return await this.repository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<User> {
    return await this.repository.findOne({ where: { slug: slug } });
  }

  public async findOneByUsername(username: string): Promise<User> {
    return await this.repository.findOne({ where: { username: username } });
  }

  public async update(updateUser: UpdateUserInput): Promise<User> {
    const user = await this.repository.preload({ id: updateUser.id });

    if (user) {
      return await this.repository.save(Object.assign(user, updateUser));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const user = await this.repository.preload({ id: id });

    if (user) {
      return await this.repository.delete(user.id);
    }
  }

  public async count(): Promise<Number> {
    return await this.repository.count();
  }
}
