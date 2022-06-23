import { render, screen } from '@testing-library/react';
import Biography from './biography.js';
import testImage from './testImage.jpg';

test('renders Biography of a calamatous PM', () => {
  render(<Biography bcName="Boris Johnson" id={101} avatar={testImage} region= "London" desc="Get Brexit done. Hands, face, space. Also: party, party, party!" />);
  const linkElement = screen.getByText("Boris Johnson");
  expect(linkElement).toBeInTheDocument();
});

