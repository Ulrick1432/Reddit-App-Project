// Users can search the data using terms -> dvs. redux eller en lokal state (find ud af hvad der giver bedst mening) så jeg kan fetch/request på baggrund af det. 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "./searchBarSlice.js";
import { setSearchResults } from "./searchResultSlice.js";
import { searchReddit } from "../../api/api.mjs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch(); //used to dispatch actions / update state.
    const navigate = useNavigate();

    const searchInput = useSelector((state) => state.search); // allows the component to select and access data from the Redux store.

    const handleSearchInput = (e) => {
        dispatch(setSearchInput(e.target.value)); //updates SearchInput with the value that have been written into the input element.
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") { //triggers HandleSearch when user hits the enter key in the input field
            handleSearch();
        }
    };

    const handleSearch = () => { 
        const sanitizedSearchInput = searchInput.replace(/ /g, '%20');//Replace white space in searchInput with '%20'
        searchReddit(sanitizedSearchInput) //Gives the SearchReddit Fetch query ass the search input.
        .then((searchData) => {
            dispatch(setSearchResults(searchData));//update the state of searchResults to the retuned data
            const searchParams = new URLSearchParams();//built-in JavaScript class used for handling URL query parameters.
            searchParams.set('q', searchInput);//sets a query parameter named 'q' in the searchParams object.
            navigate(`/search?q=${sanitizedSearchInput}`);// navigate to a new URL
        });
    }

    return (
        <div className="searchInput">
            <input 
                id="searchInput"
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchBar;