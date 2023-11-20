import React from 'react';
import { render, screen} from '@testing-library/react';
import ContentBox from '../ContentBox';
/* Purpose: This test ensures that the ContentBox component renders correctly with the default props, 
and certain elements (subreddit and title) are present in the rendered output. */
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
});