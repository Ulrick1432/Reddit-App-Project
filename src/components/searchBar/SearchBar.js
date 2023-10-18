// Users can search the data using terms -> dvs. redux eller en lokal state (find ud af hvad der giver bedst mening) så jeg kan fetch/request på baggrund af det. 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "./searchBarSlice.js";
import { setSearchResults } from "./searchResultSlice.js";
import { searchReddit } from "../../api/api.mjs";


const SearchBar = () => {
    const dispatch = useDispatch(); //used to dispatch actions / update state.
    const searchInput = useSelector((state) => state.search); // allows the component to select and access data from the Redux store.

    const handleSearchInput = (e) => {
        dispatch(setSearchInput(e.target.value)); //updates SearchInput with the value that have been written into the input element.
    }

    const handleSearch = () => { 
        const sanitizedSearchInput = searchInput.replace(/ /g, '%20');//Replace white space in searchInput with '%20'
        searchReddit(sanitizedSearchInput) //Gives the SearchReddit Fetch query ass the search input.
        .then((searchData) => {
            dispatch(setSearchResults(searchData.data))//update the state of searchResults to the retuned data
        }) 
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") { //triggers HandleSearch when user hits the enter key in the input field
            handleSearch();
        }
    };

    return (
        <div>
            <input 
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
            />
            <p>{searchInput}</p> {/*This line can be deleted was just for testing purpose*/}
        </div>
    )
}
export default SearchBar;