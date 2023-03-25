import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders List of texts', () => {
  render(<App />);
  const linkElement = screen.getByText(/List of texts/i);
  expect(linkElement).toBeInTheDocument();
});
