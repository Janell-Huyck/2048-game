import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 2048', () => {
  render(<App />);
  const linkElement = screen.getByText(/2048/i);
  expect(linkElement).toBeInTheDocument();
}