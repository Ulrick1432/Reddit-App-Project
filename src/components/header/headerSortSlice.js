import { createSlice } from "@reduxjs/toolkit";

const headerSortSlice = createSlice({
    name: 'headerSort',
    initialState: { selectedSort: "hot"},
    reducers: {
        setHeaderSort: (state, action) => {
            state.selectedSort = action.payload;
        },
    },
});

export const { setHeaderSort } = headerSortSlice.actions;
export const selectSortOption = (state) => state.sorting.selectedSort;
export default headerSortSlice.reducer;