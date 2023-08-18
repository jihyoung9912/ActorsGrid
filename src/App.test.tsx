import { render, screen } from '@testing-library/react';
import App from 'App';

test('Shows the main page', () => {
  render(<App />);
  const TestElement = screen.getByText('Test');
  expect(TestElement).toBeInTheDocument();
});
