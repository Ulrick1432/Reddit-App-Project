import React from "react";
import data from "../../api/fakeApi.mjs";

console.log(data);
const dataNum = data[0].data.num_comments;

const ContentBox = () => {
    return (
        <div className="contentbox">
            <p>{dataNum}</p>
        </div>
    )
}

export default ContentBox;