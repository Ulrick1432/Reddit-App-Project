//This test covers ErrorForm- and ErrorState component

import React from "react";
import store from "../../../app/store";
import AppLayout from "../../../app/AppLayout";
import ErrorForm from "../ErrorForm";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";


describe('ErrorForm', () => {

afterEach(() => {
  jest.resetAllMocks();
});

  it('renderes the ErrorForm Component', async () => {
    render(
      <Provider store={store} >
        <MemoryRouter>
          <AppLayout />
        </MemoryRouter>
      </Provider>
    )
    
    const errorButtonContainer = screen.getByTestId('reportErrorButtonContainer');
    expect(errorButtonContainer).toBeInTheDocument();
    
    fireEvent.click(screen.getByTestId('reportErrorButton'));
    expect(screen.getByTestId('errorFormContainer')).toBeInTheDocument();
  })

  it('dispatches setErrorState action the close- and submit button', async() => {
    render(
      <Provider store={store} >
        <MemoryRouter>
          <AppLayout /> 
        </MemoryRouter>
      </Provider>
    )

    const errorFormContainer = screen.queryByTestId('errorFormContainer')

    await fireEvent.click(screen.getByTestId('reportErrorButton'));
    await fireEvent.click(screen.getByTestId('closeError'));
    expect(errorFormContainer).not.toBeInTheDocument();

    await fireEvent.click(screen.getByTestId('reportErrorButton'));
    expect(screen.getByTestId('errorFormContainer')).toBeInTheDocument();

    await fireEvent.click(screen.getByTestId('submitButton'));
    expect(errorFormContainer).not.toBeInTheDocument();

  })

  it('updates errorText state on input change in textarea', () => {
    render(
      <Provider store={store} >
        <MemoryRouter>
          <AppLayout /> 
        </MemoryRouter>
      </Provider>
    )

      fireEvent.click(screen.getByTestId('reportErrorButton'));
      expect(screen.getByTestId('errorFormContainer')).toBeInTheDocument();

      const textarea = screen.getByTestId('errorTextarea');
      fireEvent.change(textarea, {target: { value: 'testing error description :D' }})

      expect(textarea.value).toBe('testing error description :D');

  })
})