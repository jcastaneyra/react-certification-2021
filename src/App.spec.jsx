import React from 'react';
import { render } from '@testing-library/react';
import SearchProvider from './state/SearchProvider';
import App from './App';

describe('App component', () => {
  it(`contains the app in one child`, () => {
    const { container } = render(<SearchProvider><App /></SearchProvider>);

    expect(container.children.length).toBe(1);
  });
});