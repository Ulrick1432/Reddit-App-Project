//This is the structure of a contentBox
import React from "react";
import "./contentBox.css"

const ContentBox = ({ subreddit, title, NumUPS, CommNum, contentData}) => {
    const isImage = contentData.post_hint === "image";
    const isVideo = contentData.is_video;
    const isLink = contentData.url && !isImage && !isVideo && !contentData.is_self;
    const isSelfPost = contentData.is_self;

    // Determine the content source based on the post type
    let source;

    if (isSelfPost) {
        // Render self-text content
        source = contentData.selftext;
    } else if (isVideo) {
        source = contentData.secure_media.reddit_video.fallback_url;
    } else if (isImage) {
        source = contentData.url;
    } else if (isLink) {
        source = contentData.url;
    } else {
        // Handle any other cases as needed
        source = contentData.url; // Default to URL if not recognized
    }


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
            {isSelfPost ? (
                <p>{source}</p>
            ) : isVideo ? (
                <video controls>
                    <source src={source} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : isImage ? (
                <img src={source} alt={title} />
            ) : (
                <a href={source} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            )}
            <div className="contentBoxHeaderAndFooter">
                <p>subreddit</p>
                <p>{CommNum}</p>
            </div>
        </div>
    )
}

export default ContentBox;