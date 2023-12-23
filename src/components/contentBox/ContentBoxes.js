//This file is used to map multiple contentbox 
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox.js";
import "./contentBox.css";
import { initialReddit } from "../../api/api.mjs";
import { useSelector } from "react-redux";

const ContentBoxes = () => {
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
        <div className="contentBoxes" data-testid='contentBoxes' >
            {dataSource.map((element, index) => ( //.map will look at all the elements and return the value that is requested in the contentbox for that index.
                <ContentBox 
                    key={index}
                    subreddit={element.data.subreddit}
                    title={element.data.title}
                    NumUPS={element.data.ups}
                    CommNum={element.data.num_comments}
                    contentData={element.data}
                />
            ))}
        </div>
    );
};

export default ContentBoxes;