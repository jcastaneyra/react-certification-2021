import React from 'react';
import { render } from '@testing-library/react';
import SearchProvider from '../../../state/SearchProvider';
import Header from '..';

describe('Header', () => {

  it('renders Header search input', () => {
    const renderHeader = render(<SearchProvider><Header /></SearchProvider>);
    const header = renderHeader.getByRole("textbox");
    expect(header).toBeTruthy();

  });

  it('renders Header svg icons', () => {
    const renderHeader = render(<SearchProvider><Header /></SearchProvider>);
    const header = renderHeader.container.querySelectorAll('svg');
    expect(header.length).toBe(2);
  });

});