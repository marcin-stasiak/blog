import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, Repository } from 'typeorm';

import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly repository: Repository<Article>,
  ) {}

  public async create(createArticle: CreateArticleInput): Promise<Article> {
    const article = this.repository.create(createArticle);

    return await this.repository.save(article);
  }

  public async findAll(limit: number = 30, offset: number = 0): Promise<Article[]> {
    return await this.repository.find({ take: limit, skip: offset });
  }

  public async findOneById(id: string): Promise<Article> {
    return await this.repository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<Article> {
    return await this.repository.findOne({ where: { slug: slug } });
  }

  public async update(updateArticle: UpdateArticleInput): Promise<Article> {
    const article = await this.repository.preload({ id: updateArticle.id });

    if (article) {
      return await this.repository.save(Object.assign(article, updateArticle));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const article = await this.repository.preload({ id: id });

    if (article) {
      return await this.repository.delete(article.id);
    }
  }

  public async count(): Promise<Number> {
    return await this.repository.count();
  }
}
