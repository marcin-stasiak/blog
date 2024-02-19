import { NextPage } from 'next';
import client from '../../utilities/client';
import TAG_QUERY from '../../utilities/graphql/tag.query.gql';
import { TagInterface } from '../../interfaces/tag.interface';

interface TagPagePropsInterface {
  tag: TagInterface;
}

const TagPage: NextPage<TagPagePropsInterface> = ({tag}) => {
  return (
    <>
      <h1>{tag.title}</h1>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const {data} = await client.query({
      query: TAG_QUERY,
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


export default TagPage;