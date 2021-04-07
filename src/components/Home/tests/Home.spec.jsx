import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchProvider from '../../../state/SearchProvider';
import Home from '../index';

describe('Home', () => {
  beforeEach(() => {
    render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );
  });

  it('renders Home and its elements', () => {
    const home = screen.getByPlaceholderText('Search ...');
    expect(home).toBeTruthy();
  });
});
