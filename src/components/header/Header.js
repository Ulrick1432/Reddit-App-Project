//This file is used to control the Header
import "./header.css";
import SearchBar from "../searchBar/SearchBar.js";
import ReportErrorButton from "../errorState/ErrorState.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHeaderSort } from "./headerSortSlice.js";
import { topicReddit } from "../../api/api.mjs";
import { setSearchResults } from "../searchBar/searchResultSlice.js";
import RedditLogo from "../../Resources/IMG/reddit-circle-logo-64px.png"; // Import the image


const Header = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleTopicsSearch = (e) => {
		const selectedTopic = e.target.value;
		if (selectedTopic !== "") {
			dispatch(setHeaderSort(selectedTopic)); // Dispatch an action to set the selected topic in the Redux store
			const query = `${selectedTopic}`;
			
			topicReddit(query)
				.then((searchData) => {
					dispatch(setSearchResults(searchData)); // Dispatch an action to set the search results in the Redux store
					const topicParams = new URLSearchParams(); // create a set of key-value pairs representing the query parameters of a URL.
					topicParams.set('q', selectedTopic); // sets a query parameter with the key 'q' and the value of the selectedTopic variable.
					navigate(`/r/${selectedTopic}`); // to perform navigation to a new URL.
				})
				.catch((error) => {
					console.error("Error performing topic-based search:", error);
					window.alert(error);
				});
		}
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
					<option value="">Select topic</option>
					<option value="gaming">Gaming</option>
					<option value="sports">Sports</option>
					<option value="business">Business</option>
					<option value="crypto">Crypto</option>
					<option value="television">Television</option>
				</select>
				<ReportErrorButton />
			</div>
		</div>
	);
};

export default Header;