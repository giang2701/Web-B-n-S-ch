import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const LayOutClient = () => {
    return (
        <>
            <div className="relative z-50">
                <Header />
            </div>
            <div className="relative z-0">
                <Outlet />
            </div>
            <div className="relative z-0">
                <Footer />
            </div>
        </>
    );
};

export default LayOutClient;
