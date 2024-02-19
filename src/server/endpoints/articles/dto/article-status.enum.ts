import { registerEnumType } from '@nestjs/graphql';

export enum ArticleStatus {
  Published = 'published',
  Draft = 'draft',
  Trash = 'trash',
}

registerEnumType(ArticleStatus, {
  name: 'ArticleStatus',
});
