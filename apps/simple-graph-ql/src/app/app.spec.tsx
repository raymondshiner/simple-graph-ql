import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';

const PostListId = 'postList';
const PostsByUserId = 'postsByUser';
const UserListId = 'userList';

jest.mock('./PostList', () => ({
  PostList: jest.fn(() => <div data-testid={PostListId} />),
}));

jest.mock('./PostsByUser', () => ({
  PostsByUser: jest.fn(() => <div data-testid={PostsByUserId} />),
}));

jest.mock('./UserList', () => ({
  UserList: jest.fn(() => <div data-testid={UserListId} />),
}));

describe('App', () => {
  const getButtonByName = (name: string) => {
    return screen.getByRole('button', {
      name,
    });
  };

  const assertComponentIsNull = async (testId: string) => {
    expect(await screen.queryByTestId(testId)).toBeNull();
  };

  beforeEach(() => {
    render(<App />);
  });

  it('should have the app name as the title', () => {
    screen.getByText(/My GraphQL Application/i);
  });

  it('should have 3 main navigation buttons with correct text', () => {
    getButtonByName('Posts');
    getButtonByName('Posts By User');
    getButtonByName('Users');
  });

  it('should render only the PostList component by default', async () => {
    screen.getByTestId(PostListId);
    await assertComponentIsNull(PostsByUserId);
    await assertComponentIsNull(UserListId);
  });

  it('should render only the PostsByUsers component when the postByUsers Button is clicked', async () => {
    fireEvent.click(getButtonByName('Posts By User'));

    screen.getByTestId(PostsByUserId);
    await assertComponentIsNull(PostListId);
    await assertComponentIsNull(UserListId);
  });

  it('should render only the UserList component when the users button is pressed', async () => {
    fireEvent.click(getButtonByName('Users'));

    screen.getByTestId(UserListId);
    await assertComponentIsNull(PostsByUserId);
    await assertComponentIsNull(PostListId);
  });

  it('should render the Posts Component again when the user clicks on Users after clicking on another nav button', async () => {
    fireEvent.click(getButtonByName('Users'));
    fireEvent.click(getButtonByName('Posts'));

    screen.getByTestId(PostListId);
    await assertComponentIsNull(PostsByUserId);
    await assertComponentIsNull(UserListId);
  });
});
