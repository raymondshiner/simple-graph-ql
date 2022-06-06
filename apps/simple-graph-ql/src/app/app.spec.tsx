import { render, screen } from '@testing-library/react';
import App from '../app';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);
  });

  it('should have the app name as the title', () => {
    render(<App />);

    screen.getByText(/My GraphQL Application/i);
  });
});
