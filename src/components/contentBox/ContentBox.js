import React from "react";
import "./contentBox.css"

const ContentBox = ({ subreddit, title, NumUPS, CommNum}) => {
    return (
        <div className="contentBox">
            <h3>{subreddit}</h3>
            <div className="contentBoxHeaderAndFooter">
                <div className="like">
                    <p>▲</p>
                    <p>{NumUPS}</p>
                    <p>▼</p>
                </div>
                <h2>{title}</h2>
            </div>
            <h1>Content img or video</h1>
            <div className="contentBoxHeaderAndFooter">
                <p>subreddit</p>
                <p>{CommNum}</p>
            </div>
        </div>
    )
}

export default ContentBox;