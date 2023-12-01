// Header.test.js
import { searchReddit } from "../../../api/api.mjs";
import React from "react";
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import { renderWithProviders } from "../../../utils/reduxTest-utils";

jest.mock('../../../api/api.mjs');

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles topics search', async () => {
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
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const selectElement = screen.getByTestId('topics');

    // Trigger the selection of the 'gaming' option
    await userEvent.selectOptions(selectElement, 'gaming');
    expect(screen.getByText(/gaming/i)).toBeInTheDocument();

    await userEvent.selectOptions(selectElement, 'sports');
    expect(screen.getByText(/sports/i)).toBeInTheDocument();

    await userEvent.selectOptions(selectElement, 'business');
    expect(screen.getByText(/business/i)).toBeInTheDocument();

    await userEvent.selectOptions(selectElement, 'crypto');
    expect(screen.getByText(/crypto/i)).toBeInTheDocument();

    await userEvent.selectOptions(selectElement, 'television');
    expect(screen.getByText(/television/i)).toBeInTheDocument();

    await userEvent.selectOptions(selectElement, 'celebrity');
    expect(screen.getByText(/celebrity/i)).toBeInTheDocument();
  });
});
