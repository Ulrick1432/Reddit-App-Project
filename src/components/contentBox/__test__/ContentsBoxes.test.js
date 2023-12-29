import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../app/store";
import ContentBoxes from "../ContentBoxes";
import { MemoryRouter } from "react-router-dom";
import { initialReddit } from "../../../api/api.mjs";

//This test makes sure that the datasource.map() works in ContentBoxes component.

jest.mock('../../../api/api.mjs');


describe('ContentBoxes component', () => {
  
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the div for the contentBoxes and multible divs inside/content', async () => {

    const dataSource = [
      { data: { subreddit: 'sub1',  title: 'title1', ups: 1, num_comments: 2 } },
      { data: { subreddit: 'sub2',  title: 'title2', ups: 2, num_comments: 3 }},
    ];

    initialReddit.mockResolvedValue(dataSource);
    await act( async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <ContentBoxes />
          </MemoryRouter>
        </Provider>
      )
    })

    const contentsBoxesElement = screen.getByTestId('contentBoxes');
    expect(contentsBoxesElement).toBeInTheDocument();
    expect(initialReddit).toHaveBeenCalled();

    const contentBoxesAllElements = screen.getAllByTestId('contentBoxes');
    expect(contentBoxesAllElements.length).toBeGreaterThan(0);
  })
});