import React from "react";
import "./header.css";
const Header = () => {
    return (
        <div className="header">
            <p>Logo/IMG</p>
            <p>Title</p>
            <div>
                    <p>Sort by</p>
                    <select id="sortBy" name="sortBy"> sortBy
                        <option value="best">Best</option>
                        <option value="hot">Hot</option>
                        <option value="new">New</option>
                        <option value="top">Top</option>
                        <option value="rising">Rising</option>
                    </select>
                </div>
        </div>
    );
};

export default Header;