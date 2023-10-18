//Saves the search input
import { createSlice } from "@reduxjs/toolkit";

const SearchBarSlice = createSlice({
    name: 'search', //This specifies the name of the slice
    initialState: '', //This sets the initial state of the slice to an empty string
    reducers: { // defines one or more reducer functions
        setSearchInput: (state, action) => { //The purpose of this reducer is to update the state with the search input passed in the action payload.
            return action.payload; //returns action.payload, which is assumed to be a new search input value.
        },
    },
});

export const { setSearchInput } = SearchBarSlice.actions; // exports the setSearchInput action creator. 
export default SearchBarSlice.reducer;  // exports the reducer created by the slice. 
