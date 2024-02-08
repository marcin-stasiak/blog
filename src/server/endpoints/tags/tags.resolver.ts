import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';
import { TagsService } from './tags.service';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  public createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  public findAll() {
    return this.tagsService.findAll();
  }

  @Query(() => Tag, { name: 'tag' })
  public findOne(@Args('id', { type: () => String }) id: string) {
    return this.tagsService.findOneById(id);
  }

  @Mutation(() => Tag)
  public updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput);
  }

  @Mutation(() => Tag)
  public removeTag(@Args('id', { type: () => String }) id: string) {
    return this.tagsService.remove(id);
  }
}
