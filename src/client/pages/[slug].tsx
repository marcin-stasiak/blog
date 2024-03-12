import { NextPage } from 'next';

import ARTICLE_QUERY from '../utilities/graphql/article.query.gql';
import client from '../utilities/client';
import { ArticleInterface } from '../interfaces/article.interface';
import {Head} from '../components/head';

interface ArticlePagePropsInterface {
  article: ArticleInterface;
}

const ArticlePage: NextPage<ArticlePagePropsInterface> = ({article}) => {
  return (
    <>
      <Head />

      <h1>{article.title}</h1>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const {data} = await client.query({
      query: ARTICLE_QUERY,
      variables: {
        slug: query.slug
      }
    });

    return {
      props: {
        article: data.article
      }
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default ArticlePage;