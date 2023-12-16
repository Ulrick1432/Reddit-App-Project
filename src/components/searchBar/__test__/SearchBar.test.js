import React from "react";
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import store from '../../../app/store.js';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SearchBar from "../SearchBar.js";
import { searchReddit } from "../../../api/api.mjs";

jest.mock('../../../api/api.mjs');

describe('SearchBar Component', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Handles search when Enter key is pressed', async () => {
    searchReddit.mockResolvedValue({
      data: {
        children: [
          {data: {testDataName: 'do you see me?'} }
        ]
      }
    });
    
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Routes>
              <Route path="/" element={<SearchBar />} />
              <Route path=":query" element={<SearchBar />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(element, { target: { value: 'test' } });
    });
    expect(element.value).toBe('test');

    await act(async () => {
      fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });
    });

    await waitFor(() => {
      expect(store.getState().searchResults).toEqual({
        data: {
          children: [
            {data: {testDataName: 'do you see me?'} }
          ]
        }
      })
      expect(searchReddit).toHaveBeenCalledWith('test');
    });
  });
});




//https://github.com/testing-library/jest-dom#custom-matchers
