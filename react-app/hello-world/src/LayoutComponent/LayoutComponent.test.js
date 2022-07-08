import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayoutComponent from './LayoutComponent';

describe('<LayoutComponent />', () => {
  test('it should mount', () => {
    render(<LayoutComponent />);
    
    const layoutComponent = screen.getByTestId('LayoutComponent');

    expect(layoutComponent).toBeInTheDocument();
  });
});