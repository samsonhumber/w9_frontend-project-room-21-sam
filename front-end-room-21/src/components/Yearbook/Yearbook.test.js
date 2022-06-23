import { render, screen } from '@testing-library/react';
import Yearbook from './Yearbook.js';
import { filters } from '../App/filters.js'


test('renders the yearbook', () => {
  render(
  <Yearbook filters={filters}/>
  );
});