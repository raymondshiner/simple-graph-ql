/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { PostList } from './PostList';

describe('PostList', () => {
  it('should render without crashing', () => {
    render(<PostList />);
  });
});
