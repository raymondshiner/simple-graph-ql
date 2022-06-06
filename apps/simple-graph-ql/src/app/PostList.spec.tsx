/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedProvider } from '@apollo/client/testing';
import { cleanup, render, screen } from '@testing-library/react';
import { GET_ALL_POSTS, PostList } from './PostList';

const generatePost = (id: number, title: string, body: string) => {
  return {
    id,
    title,
    body,
  };
};

describe('PostList', () => {
  afterEach(cleanup);
  it('should render without crashing', () => {
    render(
      <MockedProvider>
        <PostList />
      </MockedProvider>
    );
  });

  it('should render some loading text upon initial render', () => {
    render(
      <MockedProvider>
        <PostList />
      </MockedProvider>
    );

    screen.getByText(/loading/i);
  });

  it('should render the first 2 posts returned from fetching the graqphl server', async () => {
    const postA = generatePost(1, 'Some Ttitl', 'Some body');
    const postB = generatePost(2, 'Some unique thing', 'body other body');

    const mocks = [
      {
        request: {
          query: GET_ALL_POSTS,
          variables: {
            options: {
              paginate: {
                page: 1,
                limit: 2,
              },
            },
          },
        },
        result: {
          data: {
            posts: {
              data: [postA, postB],
              meta: {
                totalCount: 0,
              },
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks as any}>
        <PostList />
      </MockedProvider>
    );

    await screen.findByText(postA.title);
  });
});
