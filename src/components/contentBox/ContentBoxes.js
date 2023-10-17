//This file is used to map multiple contentbox 
import React from "react";
import ContentBox from "./ContentBox.js";
import data from "../../api/fakeApi.mjs";
import "./contentBox.css";

const ContentBoxes = () => {
    return (
        <div className="contentBoxes">
            {data.map((element, index) => ( //.map will look at all the elements and return the value that is requested in the contentbox for that index.
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