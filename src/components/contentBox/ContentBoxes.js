//This file is used to map multiple contentbox 
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox.js";
import "./contentBox.css";
import { initialReddit } from "../../api/api.mjs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ContentBoxes = () => {
    const location = useLocation();//This object represents the current URL location
    const searchQuery = new URLSearchParams(location.search).get('q');//access the query parameters in the URL
    const searchResults = useSelector((state) => state.searchResults);
    const [initialRedditData, setInitialRedditData] = useState([]);
    useEffect(() => {
        initialReddit()
        .then((data) => {
            setInitialRedditData(data);
        })
        .catch((error) => {
            console.error("Error fetching initialReddit:", error);
        });
    }, []);

    const dataSource = searchResults.length > 0 ? searchResults : initialRedditData;
    
    return (
        <div className="contentBoxes">
            {dataSource.map((element, index) => ( //.map will look at all the elements and return the value that is requested in the contentbox for that index.
                <ContentBox 
                    key={index}
                    subreddit={element.data.subreddit}
                    title={element.data.title}
                    NumUPS={element.data.ups}
                    CommNum={element.data.num_comments}
                    
                />
            ))}
        </div>
    );
};

export default ContentBoxes;