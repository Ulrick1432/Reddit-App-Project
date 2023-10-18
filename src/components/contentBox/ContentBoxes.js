//This file is used to map multiple contentbox 
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox.js";
import data from "../../api/fakeApi.mjs";
import "./contentBox.css";
import { initialReddit } from "../../api/api.mjs";

const ContentBoxes = () => {
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

    return (
        <div className="contentBoxes">
            {initialRedditData.map((element, index) => ( //.map will look at all the elements and return the value that is requested in the contentbox for that index.
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