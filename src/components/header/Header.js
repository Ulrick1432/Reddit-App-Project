//This file is used to control the Header
import "./header.css";
import SearchBar from "../searchBar/SearchBar.js";
import ReportErrorButton from "../errorState/ErrorState.js";
import { useDispatch } from "react-redux";
import { setHeaderSort } from "./headerSortSlice.js";
import { searchReddit } from "../../api/api.mjs";
import { setSearchResults } from "../searchBar/searchResultSlice.js";
import RedditLogo from "../../Resources/IMG/reddit-circle-logo-64px.png"; // Import the image


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
            <img className="logo" src={RedditLogo} alt="reddit logo"/>
            <div className="titleWithSearchBar">
                <h1>UPH Reddit V</h1>
                <SearchBar />
            </div>
            <div className="divForTopicsAndErrorBut">
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
                <ReportErrorButton />
            </div>
        </div>
    );
};

export default Header;