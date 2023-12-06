import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react'
import store from '../../../app/store.js'; //"store is not a named variable in the file"
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../SearchBar.js";

describe('SearchBar Component', () => {
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
  })
});




//https://github.com/testing-library/jest-dom#custom-matchers

/*
import React from "react";
import { screen, act, getByText } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../SearchBar";
import { renderWithProviders } from "../../../utils/reduxTest-utils";
import { setSearchInput } from "../searchBarSlice";

jest.mock('../../../api/api.mjs');

describe('SearchBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Handles search input change', async () => {
    const { store } = renderWithProviders(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test text');
    expect(await screen.findByText('test text')).toBeInTheDocument();

  });
});
*/
/*const inputElement = screen.getByRole('textbox');
    const userInput = 'test search';

    await act(async () => {
      await userEvent.type(inputElement, userInput);
      store.dispatch(setSearchInput(userInput));
    });

    const state = store.getState();
    expect(state.search).toBe('test search');*/



 /*const inputElement = screen.getByRole('textbox');
    await userEvent.keyboard(inputElement, 'test search');
    expect(screen.getByRole('textbox')).toHaveValue('test search');
    //expect(store.dispatch).toHaveBeenCalledWith(setSearchInput('test search')); */