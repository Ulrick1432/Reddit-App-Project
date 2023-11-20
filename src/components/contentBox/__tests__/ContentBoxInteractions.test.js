import React from 'react';
import { render, screen} from '@testing-library/react';
import ContentBox from '../ContentBox';
import userEvent from "@testing-library/user-event";
/* Purpose: These tests focus on user interactions. They simulate user clicks on the upvote and downvote buttons, 
and then check whether the expected changes in the component's state (e.g., vote count and button classes) occur. */
describe('User Interation Test for the ContentBox component', () => {
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

      it('increments voteCount when upvote is clicked', async () => {
        render(<ContentBox {...defaultProps} />);
        const upvoteButton = screen.getByText('▲');
        userEvent.click(upvoteButton);
        expect(await screen.findByText('1')).toBeInTheDocument();
      });
    
      it('toggles upvoted state when upvote is clicked', async () => {
        render(<ContentBox {...defaultProps}/>);
        const upvoteButton = screen.getByText('▲');
        userEvent.click(upvoteButton);
        expect(await screen.getByText('▲')).toHaveClass('active');
        userEvent.click(upvoteButton);
        expect(await screen.getByText('▲')).not.toHaveClass('active');
      });
    
      it('toggles downvoted state when downvote is clicked', async () => {
        render(<ContentBox {...defaultProps} />);
        const downvoteButton = screen.getByText('▼');
        userEvent.click(downvoteButton);
        expect(await screen.getByText('▼')).toHaveClass('active');
        userEvent.click(downvoteButton);
        expect(await screen.getByText('▼')).not.toHaveClass('active');
      });
})