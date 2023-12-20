//This file is used to control the Header
import "./header.css";
import SearchBar from "../searchBar/SearchBar.js";
import ReportErrorButton from "../errorState/ErrorState.js";
import { useDispatch } from "react-redux";
import { setHeaderSort } from "./headerSortSlice.js";
import { searchReddit } from "../../api/api.mjs";
import { setSearchResults } from "../searchBar/searchResultSlice.js";

const Header = () => {

    const dispatch = useDispatch();

    const handleTopicsSearch = (e) => {
    const selectedTopic = e.target.value;
    dispatch(setHeaderSort(selectedTopic)); // Dispatch an action to set the selected topic in the Redux store
    const query = `topic:${selectedTopic}`;
    
    searchReddit(query)
        .then((searchData) => {
            dispatch(setSearchResults(searchData)); // Dispatch an action to set the search results in the Redux store
        })
        .catch((error) => {
            console.error("Error performing topic-based search:", error);
            window.alert(error);
        });
    };

    return (
        <div className="header">
            <p>Logo/IMG</p>
            <p>Title</p>
            <SearchBar />
            <div>
                <p>Topics</p>
                <select 
                    id="topics" 
                    data-testid="topics"
                    name="topics" 
                    onChange={handleTopicsSearch}
                >
                    <option value="gaming">Gaming</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="crypto">Crypto</option>
                    <option value="television">Television</option>
                    <option value="celebrity">Celebrity</option>
                </select>
            </div>
        <ReportErrorButton />
        </div>
    );
};

export default Header;