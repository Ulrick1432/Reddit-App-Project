import React from "react";
import { render, screen } from "@testing-library/react";
import AppLayout from "../AppLayout";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router-dom";

describe('AppLayout Component' , () => {
  it('renders AppLayout', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AppLayout />
        </MemoryRouter>
      </Provider>
    )

    const AppLayoutElement = screen.getByTestId('appLayout');
    expect(AppLayoutElement).toBeInTheDocument();
  })
})