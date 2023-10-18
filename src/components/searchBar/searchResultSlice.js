import { createSlice } from "@reduxjs/toolkit";

const SearchResultSlice = createSlice({
    name: 'searchResults',
    initialState: null,
    reducers: {
        setSearchResults: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSearchResults } = SearchResultSlice.actions;
export default SearchResultSlice.reducer;