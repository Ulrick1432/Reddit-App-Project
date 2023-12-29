//Used for Redux integration
//It's not used in this App.
//This code is used when you want to used a copy of the used redux store.
import React from "react";
import { render } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchBarReducer from '../components/searchBar/searchBarSlice.js';
import searchResultsReducer from "../components/searchBar/searchResultSlice.js";
import headerSortReducer from "../components/header/headerSortSlice.js";

//The function can be should be used like this in the testfile → renderWithProviders(<UserDisplay />)
export function renderWithProviders(
    ui,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      store = configureStore({
        reducer: {
          headerSort: headerSortReducer,
          search: searchBarReducer,
          searchResults: searchResultsReducer,
        },
        preloadedState
      }),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
    
    //Mock dispatch function
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;


    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }
