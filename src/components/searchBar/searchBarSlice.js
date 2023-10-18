//Saves the search input
import { createSlice } from "@reduxjs/toolkit";

const SearchBarSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearchInput: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSearchInput } = SearchBarSlice.actions;
export default SearchBarSlice.reducer;
