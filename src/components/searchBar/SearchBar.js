// Users can search the data using terms -> dvs. redux eller en lokal state (find ud af hvad der giver bedst mening) så jeg kan fetch/request på baggrund af det. 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "./searchBarSlice.js";
import { setSearchResults } from "./searchResultSlice.js";
import { searchReddit } from "../../api/api.mjs";


const SearchBar = () => {
    const dispatch = useDispatch();
    const searchInput = useSelector((state) => state.search);
    const searchResults = useSelector((state) => state.searchResults)

    const handleSearchInput = (e) => {
        dispatch(setSearchInput(e.target.value));
    }

    const handleSearch = () => {
        const sanitizedSearchInput = searchInput.replace(/ /g, '%20');//Replace white space in searchInput with '%20'
        searchReddit(sanitizedSearchInput)
        .then((searchData) => {
            dispatch(setSearchResults(searchData.data))
        }) 
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
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
            <p>{searchInput}</p>
        </div>
    )
}
export default SearchBar;