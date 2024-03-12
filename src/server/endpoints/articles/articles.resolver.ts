import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ArticlesService } from './articles.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation(() => Article)
  public createArticle(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articlesService.create(createArticleInput);
  }

  @Query(() => [Article], { name: 'articles' })
  public findAll(
    @Args('limit', { type: () => Number, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Number, defaultValue: 0 }) offset: number,
  ) {
    return this.articlesService.findAll(limit, offset);
  }

  @Query(() => Article, { name: 'article' })
  public findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.articlesService.findOneBySlug(slug);
  }

  @Mutation(() => Article)
  public updateArticle(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articlesService.update(updateArticleInput);
  }

  @Mutation(() => Article)
  public removeArticle(@Args('id', { type: () => String }) id: string) {
    return this.articlesService.remove(id);
  }

  @Query(() => Number, { name: 'countArticles' })
  public count() {
    return this.articlesService.count();
  }
}
