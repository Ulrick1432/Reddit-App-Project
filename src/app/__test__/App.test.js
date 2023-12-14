//Test AppLayout first

import React from "react";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../store";
import App from "../App";

describe('App Component', () => {
  
  it('renders App', async () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>
    )
    const AppElement = screen.getByTestId('app');
    expect(await AppElement).toBeInTheDocument();
  })
});
