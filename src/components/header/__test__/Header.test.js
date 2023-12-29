// Header.test.js
import { searchReddit } from "../../../api/api.mjs";
import React from "react";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import { renderWithProviders } from "../../../utils/reduxTest-utils";
import { act } from "react-dom/test-utils";

jest.mock('../../../api/api.mjs');

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles topics search', async () => {
    //Mocks data to SearchReddit Function from the API/fetch call - so that real data/fetch isn't used
    searchReddit.mockResolvedValue({
      data: {
        children: [
          { data: { subreddit: 'gaming' } },
          { data: { subreddit: 'sports' } },
          { data: { subreddit: 'business' } },
          { data: { subreddit: 'crypto' } },
          { data: { subreddit: 'television' } },
          { data: { subreddit: 'celebrity' } },
        ],
      },
    })

    await act(async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/r/:selectedTopic" element={<Header />} />
          </Routes>
        </MemoryRouter>
      );
    });


    const selectElement = screen.getByTestId('topics');

    // Trigger the selection of the options

    await act(async () => {
      userEvent.selectOptions(selectElement, 'gaming');
      expect(screen.getByText(/gaming/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'gaming');
      expect(screen.getByText(/gaming/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'sports');
      expect(screen.getByText(/sports/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'business');
      expect(screen.getByText(/business/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'crypto');
      expect(screen.getByText(/crypto/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'television');
      expect(screen.getByText(/television/i)).toBeInTheDocument();
    })

    await act(async () => {
      userEvent.selectOptions(selectElement, 'celebrity');
      expect(screen.getByText(/celebrity/i)).toBeInTheDocument();
    })
  });
});
