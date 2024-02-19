import { NextPage } from 'next';
import { CategoryInterface } from '../../interfaces/category.interface';
import client from '../../utilities/client';
import CATEGORY_QUERY from '../../utilities/graphql/category.query.gql';

interface CategoryPagePropsInterface {
  category: CategoryInterface;
}

const CategoryPage: NextPage<CategoryPagePropsInterface> = ({category}) => {
  return (
    <>
      <h1>{category.title}</h1>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const {data} = await client.query({
      query: CATEGORY_QUERY,
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

export default CategoryPage;