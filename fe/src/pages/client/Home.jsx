import React, { useContext } from "react";
import { ProductsContext } from "../../context/ContextProducts";
import Banner from "../../component/Banner";

const Home = () => {
    const { data } = useContext(ProductsContext);
    // console.log(data);

    return (
        <div className="bg-[#f0f0f0] h-[1000px]">
            {/* banner */}
            <div className="-mt-8 xl:ms-40">
                <Banner />
            </div>
        </div>
    );
};

export default Home;
