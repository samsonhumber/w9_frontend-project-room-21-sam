import { render, screen } from '@testing-library/react';
import App from './App';

test('renders our app', () => {
  render(<App />);
  const linkElement = screen.getByText("Catch Up"); 
  expect(linkElement).toBeInTheDocument();
});


