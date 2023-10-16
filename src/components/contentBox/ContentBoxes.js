import React from "react";
import ContentBox from "./ContentBox.js";
import data from "../../api/fakeApi.mjs";
import "./contentBox.css";

const ContentBoxes = () => {
    return (
        <div className="contentBoxes">
            {data.map((element, index) => (
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