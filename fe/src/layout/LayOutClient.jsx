import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const LayOutClient = () => {
    return (
        <>
            <div className="relative z-50">
                <Header />
            </div>
            <div className="relative z-0">
                <Outlet />
            </div>
        </>
    );
};

export default LayOutClient;
