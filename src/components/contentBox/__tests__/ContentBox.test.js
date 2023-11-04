import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContentBox from '../ContentBox';

describe('ContentBox', () => {
  const contentData = {
    post_hint: 'image',
    is_video: false,
    url: 'https://test-url.com',
    secure_media: {
      reddit_video: {
        fallback_url: 'https://test-video-url.com',
      },
    },
    selftext: 'This is some self-text content.',
    is_self: true,
  };

  const defaultProps = {
    subreddit: 'Test Subreddit',
    title: 'Test Title',
    NumUPS: 0,
    CommNum: 0,
    contentData,
  };

  it('renders with default props', () => {
    render(<ContentBox {...defaultProps} />);
    expect(screen.getByText(defaultProps.subreddit)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('increments voteCount when upvote is clicked', () => {
    render(<ContentBox {...defaultProps} />);
    const upvoteButton = screen.getByText('▲');
    fireEvent.click(upvoteButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('toggles upvoted state when upvote is clicked', () => {
    render(<ContentBox {...defaultProps} />);
    const upvoteButton = screen.getByText('▲');
    fireEvent.click(upvoteButton);
    expect(screen.getByText('▲')).toHaveClass('active');
    fireEvent.click(upvoteButton);
    expect(screen.getByText('▲')).not.toHaveClass('active');
  });

  // Write similar tests for downvoting, content type handling, and more.
});
