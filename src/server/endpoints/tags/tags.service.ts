import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly repository: Repository<Tag>,
  ) {}

  public async create(createTag: CreateTagInput): Promise<Tag> {
    const tag = this.repository.create(createTag);

    return await this.repository.save(tag);
  }

  public async findAll(limit: number = 30, offset: number = 0): Promise<Tag[]> {
    return await this.repository.find({ take: limit, skip: offset });
  }

  public async findOneById(id: string): Promise<Tag> {
    return await this.repository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<Tag> {
    return await this.repository.findOne({ where: { slug: slug } });
  }

  public async update(updateTag: UpdateTagInput): Promise<Tag> {
    const tag = await this.repository.preload({ id: updateTag.id });

    if (tag) {
      return await this.repository.save(Object.assign(tag, updateTag));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const tag = await this.repository.preload({ id: id });

    if (tag) {
      return await this.repository.delete(tag.id);
    }
  }

  public async count(): Promise<Number> {
    return await this.repository.count();
  }
}
