import { Route, Routes } from "react-router-dom";
import LayOutClient from "../layout/LayOutClient";
import DetailProduct from "../pages/client/DetailProduct";
import Home from "../pages/client/Home";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayOutClient />}>
                    <Route index element={<Home />} />
                    <Route path="/detail" element={<DetailProduct />} />
                </Route>
            </Routes>
        </>
    );
};
export default Router;
