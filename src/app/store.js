import { configureStore } from "@reduxjs/toolkit";
//Import the components reducers here
export default configureStore({ // Because this configureStore is export default it can be named as whatever when importet into another file because of "ES6 modules".
    reducer: {
        //some reducers fx topics: topicsReducer,
    },
});