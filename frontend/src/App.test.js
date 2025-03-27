import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Project Information heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Project Information/i);
  expect(headingElement).toBeInTheDocument();
});
