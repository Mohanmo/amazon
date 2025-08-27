import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello guest text', () => {
  render(<App />);
  expect(screen.getByText(/hello guest/i)).toBeInTheDocument();
});
