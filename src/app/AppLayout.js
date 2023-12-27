//This file is used for an replacement for App.js, because then App.js is primary used for Routing
import React from "react";
import ContentBoxes from "../components/contentBox/ContentBoxes.js";
import Header from "../components/header/Header.js";
import ErrorForm from "../components/errorState/ErrorForm.js";

export default function AppLayout() {
    return (
        <div data-testid='appLayout'>
            <Header />
            <ErrorForm />
            <ContentBoxes/>
        </div>
    )
}