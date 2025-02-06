import React, { useContext, useRef, useState } from "react";
import { ProductsContext } from "../../context/ContextProducts";
import Banner from "../../component/Banner";
import ProductsUi from "../../component/ui/ProductsUi";
import FlashSale from "../../component/ui/FlashSale.";
import ScrollToTop from "../../component/ScrollToTop";
import BoxCategory from "../../component/ui/BoxCategory";
import ShoppingTrends from "../../component/ui/ShoppingTrends";
import BestSellingGoods from "../../component/ui/BestSellingGoods";
import ProductList from "../../component/ui/BestSellerOfTheWeek";

const Home = () => {
    // để mặc định là phone
    // md:tablet
    // xl:pc
    const { data } = useContext(ProductsContext);
    // console.log(data);
    const [like, setLike] = useState(false);
    return (
        <div className="bg-[#f0f0f0] h-[5000px] relative">
            {/* thanh cuộn trang */}
            <ScrollToTop />
            {/* utilities:tiện ích */}
            <div className="hidden md:inline-block xl:inline-block bg-[#7a7e7f] fixed w-[50px] h-[90px] rounded-s-lg md:top-[300px] xl:top-[160px] z-[99] md:right-0 xl:right-0 py-4">
                {/* like */}
                <div className="hover:bg-red-700 h-[45px] -mt-4 rounded-ss-lg py-[12px] group relative">
                    <i className="fa-regular fa-thumbs-up md:text-lg  xl:text-lg md:ml-[11px] xl:ml-[11px] w-[30px] bg-white flex justify-center items-center rounded-ss-lg rounded-ee-lg mb-3 -mt-[5px] cursor-pointer group-hover:text-red-700"></i>
                    <p className="absolute right-[60px] top-[20px] w-[190px] bg-[#ca2128]  hidden group-hover:flex items-center justify-center text-[15px] p-[2px] rounded-md text-white">
                        Gợi ý dành riêng cho bạn
                    </p>
                </div>
                {/* book */}
                <div className="hover:bg-red-700 h-[45px] mt-0 rounded-es-lg pt-[5px] pb-[12px] group relative">
                    <i className="fa-solid fa-book-open text-white md:text-2xl  xl:text-2xl md:ml-3 xl:ml-3 cursor-pointer"></i>
                    <p className="absolute right-[60px] top-[15px] w-[140px] bg-[#ca2128]  hidden group-hover:flex items-center justify-center text-[15px] p-[2px] rounded-md text-white">
                        Sách đang theo dõi
                    </p>
                </div>
            </div>
            {/* banner */}
            <div className="-mt-8 xl:ms-40">
                <Banner />
            </div>
            {/* box danh mục */}
            <BoxCategory />
            {/* flash Sale */}
            <FlashSale />
            {/* products : đổ sản phẩm ra trang */}
            <ProductsUi />
            {/* shopping trends:xu hướng mua sắm */}
            <ShoppingTrends />
            {/* hàng hót  */}
            <BestSellingGoods />
            {/*  */}
            <ProductList />
        </div>
    );
};

export default Home;
