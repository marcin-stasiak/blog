import { NextPage } from 'next';

import USER_QUERY from '../../utilities/graphql/user.query.gql';
import { UserInterface } from '../../interfaces/user.interface';
import client from '../../utilities/client';

interface AuthorPagePropsInterface {
  user: UserInterface;
}

const AuthorPage: NextPage<AuthorPagePropsInterface> = ({user}) => {
  return (
    <>
      <h1>{user.username}</h1>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const { data } = await client.query({
      query: USER_QUERY,
      variables: {
        slug: query.slug
      }
    });

    return {
      props: {
        user: data.user
      }
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default AuthorPage;