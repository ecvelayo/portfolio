import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentCard from './CommentCard';

describe('<CommentCard />', () => {
  test('it should mount', () => {
    render(<CommentCard />);
    
    const commentCard = screen.getByTestId('CommentCard');

    expect(commentCard).toBeInTheDocument();
  });
});