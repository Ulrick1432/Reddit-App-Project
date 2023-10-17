//This file is used for an replacement for App.js, because then App.js is primary used for Routing
import React from "react";
import ContentBoxes from "../components/contentBox/ContentBoxes.js";
import "./appLayout.css";
import Header from "../components/header/Header.js";
export default function AppLayout() {
    return (
        <div>
            <Header />
            <div className="divContent">
                <ContentBoxes/>
            </div>

        </div>
    )
}