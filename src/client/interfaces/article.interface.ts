export interface ArticleInterface {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  createDate?: string;
  updateDate?: string;
  status?: string;
}
