import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchProvider from '../../../state/SearchProvider';
import Content from '../index';

describe('Content', () => {
  beforeEach(() => {
    render(
      <SearchProvider>
        <Content />
      </SearchProvider>
    );
  });

  it('renders Content', () => {
    const content = screen.getByTestId('content');
    expect(content).toBeTruthy();
  });
});
