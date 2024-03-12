import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  public async create(createCategory: CreateCategoryInput): Promise<Category> {
    const category = this.repository.create(createCategory);

    if (category) {
      return await this.repository.save(category);
    }
  }

  public async findAll(limit: number = 30, offset: number = 0): Promise<Category[]> {
    return await this.repository.find({ take: limit, skip: offset });
  }

  public async findOneById(id: string): Promise<Category> {
    return await this.repository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<Category> {
    return await this.repository.findOne({ where: { slug: slug } });
  }

  public async update(updateCategory: UpdateCategoryInput): Promise<Category> {
    const category = await this.repository.preload({ id: updateCategory.id });

    if (category) {
      return await this.repository.save(Object.assign(category, updateCategory));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const category = await this.repository.preload({ id: id });

    if (category) {
      return await this.repository.delete(category.id);
    }
  }

  public async count(): Promise<Number> {
    return await this.repository.count();
  }
}
