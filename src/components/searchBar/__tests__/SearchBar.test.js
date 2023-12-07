import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../../../app/store.js'; //"store is not a named variable in the file"
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../SearchBar.js";
import { searchReddit } from "../../../api/api.mjs";

jest.mock('../../../api/api.mjs');

describe('SearchBar Component', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  //Nedenstående test virker! 
  it('Handles search input change', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
    await fireEvent.change(element, { target: { value: 'test' } });
    expect(element.value).toBe('test');
  });

  it('Handles search when Enter key is pressed', async () => {

    searchReddit.mockResolvedValue({
      data: {
        children: [
          {data: {testDataName: 'do you see me?'} }
        ]
      }
    });
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();

    await fireEvent.change(element, { target: { value: 'test' } });
    expect(element.value).toBe('test');

    await fireEvent.keyDown(element, { key: 'Enter', code: 'Enter'});

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
