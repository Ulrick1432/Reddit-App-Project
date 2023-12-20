import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchBarReducer from '../components/searchBar/searchBarSlice.js';
import searchResultsReducer from "../components/searchBar/searchResultSlice.js";
import headerSortReducer from "../components/header/headerSortSlice.js";
import errorStateReducer from "../components/errorState/errorStateSlice.js";
//Import the components reducers here
// Because this configureStore is export default it can be named as whatever 
//when importet into another file because of "ES6 modules".

export default configureStore({ 
  reducer: {
    //some reducers fx topics: topicsReducer,
    search: searchBarReducer,
    searchResults: searchResultsReducer,
    headerSort: headerSortReducer,
    error: errorStateReducer,
  },
});




/*this code exports a preconfigured Redux store using Redux Toolkit's configureStore. 
The store is configured with initial state slices and their respective reducers. 
When imported in another file, you can give it any name you prefer, and it provides access to the store's state
and dispatch capabilities for use in the application. */