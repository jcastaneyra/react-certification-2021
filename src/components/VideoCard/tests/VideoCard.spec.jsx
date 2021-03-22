import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from '..';

describe('VideoCard', () => {
  it('renders VideoCard', () => {
    const renderHeader = render(<VideoCard />);
    const header = renderHeader.getByTestId('videoCard');
    expect(header).toBeTruthy();
  });
});
