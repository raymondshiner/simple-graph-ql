import {
  StyledApp,
  StyledFlexbox,
  StyledNavButton,
  StyledTitle,
} from '@simple-graph-ql/ui';
import { FC, useState } from 'react';
import { PostList } from './PostList';
import { PostsByUser } from './PostsByUser';
import { UserList } from './UserList';

export function App() {
  const [activeComponent, setActiveComponent] = useState<string>('posts');

  const NavButton: FC<NavButtonProps> = ({ component, text }) => (
    <StyledNavButton onClick={() => setActiveComponent(component)}>
      {text}
    </StyledNavButton>
  );

  return (
    <StyledApp>
      <StyledTitle>My GraphQL Application</StyledTitle>
      <StyledFlexbox>
        <NavButton text="Posts" component="posts" />
        <NavButton text="Posts By User" component="postsByUser" />
        <NavButton text="Users" component="users" />
      </StyledFlexbox>
      <ComponentToRender component={activeComponent} />
    </StyledApp>
  );
}

interface ComponentToRenderProps {
  component: string;
}

const ComponentToRender: FC<ComponentToRenderProps> = ({ component }) => {
  if (component === 'posts') return <PostList />;
  else if (component === 'postsByUser') return <PostsByUser />;
  else return <UserList />;
};

export default App;
