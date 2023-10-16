import React from "react";
import ContentBox from "../components/contentBox/ContentBox.js";
import "./appLayout.css";
import Header from "../components/header/Header.js";
export default function AppLayout() {
    return (
        <div>
            <Header />
            <div className="divContent">
                <ContentBox />
            </div>

        </div>
    )
}