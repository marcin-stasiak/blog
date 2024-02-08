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
    private readonly articleRepository: Repository<Article>,
  ) {}

  public async create(createArticle: CreateArticleInput): Promise<Article> {
    const article = this.articleRepository.create(createArticle);

    return await this.articleRepository.save(article);
  }

  public async findAll(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  public async findOneById(id: string): Promise<Article> {
    return await this.articleRepository.findOne({ where: { id: id } });
  }

  public async update(updateArticle: UpdateArticleInput): Promise<Article> {
    const article = await this.articleRepository.preload({ id: updateArticle.id });

    if (article) {
      return await this.articleRepository.save(Object.assign(article, updateArticle));
    }
  }

  public async remove(id: string): Promise<DeleteResult> {
    const article = await this.articleRepository.preload({ id: id });

    if (article) {
      return await this.articleRepository.delete(article.id);
    }
  }
}
