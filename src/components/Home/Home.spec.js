import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders Home and its elements', () => {
    const home = screen.getByPlaceholderText("Search ...");
    expect(home).toBeTruthy();
  });
});