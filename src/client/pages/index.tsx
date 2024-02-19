import { NextPage } from 'next';
import ARTICLES_QUERY from '../utilities/graphql/articles.query.gql';
import client from '../utilities/client';
import { ArticleInterface } from '../interfaces/article.interface';

interface IndexPagePropsInterface {
  articles: ArticleInterface[]
  countArticles: number
}

const IndexPage: NextPage<IndexPagePropsInterface> = ({articles, countArticles}) => {
  return (
    <>
      {articles.map(article => {
        return (
          <div  key={article.id}>
            <h2>{article.title}</h2>
            <h4>{article.excerpt}</h4>
            <p>{article.content}</p>
          </div>
        );
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  const {data} = await client.query({
    query: ARTICLES_QUERY,
    variables: {
      limit: 30,
      offset: 0
    }
  });

  return {
    props: {
      articles: data.articles,
      countArticles: data.countArticles
    }
  };
}

export default IndexPage;