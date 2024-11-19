import { Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";
import LayOutClient from "../layout/LayOutClient";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayOutClient />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};
export default Router;
