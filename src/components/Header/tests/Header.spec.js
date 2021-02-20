import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '..';

describe('Header', () => {

  it('renders Header search input', () => {
    const renderHeader = render(<Header />);
    const header = renderHeader.getByRole("textbox");
    expect(header).toBeTruthy();

  });

  it('renders Header svg icons', () => {
    const renderHeader = render(<Header />);
    const header = renderHeader.container.querySelectorAll('svg');
    expect(header.length).toBe(2);
  });

});