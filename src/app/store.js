import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from '../components/searchBar/searchBarSlice.js';
import searchResultsReducer from "../components/searchBar/searchResultSlice.js";
import headerSortReducer from "../components/header/headerSortSlice.js";
//Import the components reducers here
export default configureStore({ // Because this configureStore is export default it can be named as whatever when importet into another file because of "ES6 modules".
    reducer: {
        //some reducers fx topics: topicsReducer,
        search: searchBarReducer,
        searchResults: searchResultsReducer,
        headerSort: headerSortReducer,
    },
});

/*this code exports a preconfigured Redux store using Redux Toolkit's configureStore. 
The store is configured with initial state slices and their respective reducers. 
When imported in another file, you can give it any name you prefer, and it provides access to the store's state
and dispatch capabilities for use in the application. */