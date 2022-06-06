import { gql, useQuery } from '@apollo/client';
import { FC } from 'react';

interface Post {
  id: string;
  title: string;
  body: string;
}

export const GET_ALL_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export const PostList: FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 2,
        },
      },
    },
  });

  if (loading) {
    return <div>loading</div>;
  }

  return data.posts.data.map((post: Post) => (
    <div key={post.id}>
      {post.title}
      {post.body}
    </div>
  ));
};
