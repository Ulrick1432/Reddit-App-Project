import React from 'react';
import { render, screen} from '@testing-library/react';
import ContentBox from '../ContentBox';
/* Purpose: These tests cover various functionalities of the ContentBox component based on different types of content. 
For example, they check if self-text, video, image, and link content are rendered correctly. */
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

  it('renders self-text content', () => {
    render(<ContentBox {...defaultProps} />);
    expect(screen.getByText(contentData.selftext)).toBeInTheDocument();
  });

  it('renders video content', async () => {
    const contentDataWithVideo = {
      ...defaultProps.contentData,
      is_video: true,
      secure_media: {
        reddit_video: {
          fallback_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      },
      is_self: false,
      selftext: false,
    };
    render(<ContentBox {...defaultProps} contentData={contentDataWithVideo}/>);
    const videoElement = await screen.findByTestId('video-element');
    expect(videoElement).toHaveAttribute('src', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
  });

  it('renders image content', () => {
    const contentDataWithImg = {
      ...defaultProps.contentData,
      post_hint: 'image',
      is_video: false,
      url: 'https://test-url.com',
      secure_media: {
        reddit_video: {
          fallback_url: null,
        },
      },
      is_self: false,
      selftext: false,
    };
    render(<ContentBox {...defaultProps} contentData={contentDataWithImg} />);
    expect(screen.getByAltText(defaultProps.title)).toHaveAttribute('src', 'https://test-url.com');
  });

  it('renders link content', () => {
    const contentDataWithLink = {
      ...defaultProps.contentData,
      post_hint: 'link',
      isImage: false,
      is_video: false,
      url: 'https://test-url.com',
      secure_media: {
        reddit_video: {
          fallback_url: null,
        },
      },
      is_self: false,
      selftext: false,
    };
    render(<ContentBox {...defaultProps} contentData={contentDataWithLink}/>);
    expect(screen.getByTestId('link-element')).toHaveAttribute('href', 'https://test-url.com');
  });
});
