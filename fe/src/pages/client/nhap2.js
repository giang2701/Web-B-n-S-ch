import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import IconCart from "../../component/ui/IconCart";
const images = [
    {
        id: 1,
        img: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_41170.jpg",
    },
    {
        id: 2,
        img: "https://cdn0.fahasa.com/media/catalog/product/t/r/truong_ca_achilles_1_2021_12_09_15_24_44.jpg?_gl=1*1k4pxen*_ga*NDQ5NDk0MTk0LjE3MzE4MDUxMTA.*_ga_D3YYPWQ9LN*MTczOTEwMzMyMy4zNC4xLjE3MzkxMDMzMzguMC4wLjA.*_gcl_aw*R0NMLjE3MzkxMDMzMzguQ2owS0NRaUE3c2U4QmhDQUFSSXNBS25GM3J4ZDhtNEIzcHZRdHkyaVltMXhwNTRBZ19FeXlzZnB1WVF2S0t3VUFzdm1OSllXdFhIbUhIa2FBaTRPRUFMd193Y0I.*_gcl_au*MTUxMDM3NjExOC4xNzMxODA1MTEwLjIxMTM1MDg3NjcuMTczOTAxNjI1MC4xNzM5MDE2NDI0*_ga_460L9JMC2G*MTczOTEwMzMyMy40NC4xLjE3MzkxMDM0MjIuNjAuMC40OTE5MDkxMTE.",
    },
    {
        id: 3,
        img: "https://cdn0.fahasa.com/media/catalog/product/t/r/truong_ca_achilles_2_2021_12_09_15_24_44.jpg",
    },
    {
        id: 4,
        img: "https://cdn0.fahasa.com/media/catalog/product/t/r/truong_ca_achilles_2_2021_12_09_15_24_44.jpg",
    },
    {
        id: 5,
        img: "https://cdn0.fahasa.com/media/catalog/product/t/r/truong_ca_achilles_2_2021_12_09_15_24_44.jpg",
    },
    {
        id: 6,
        img: "https://cdn0.fahasa.com/media/catalog/product/t/r/truong_ca_achilles_2_2021_12_09_15_24_44.jpg",
    },
];
const DetailProduct = () => {
    const leftBoxRef = useRef(null);
    const rightBoxRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const maxVisibleImages = 4;
    const extraImages = images.length - maxVisibleImages;
    useEffect(() => {
        const handleScroll = () => {
            const rightBox = rightBoxRef.current;
            if (rightBox) {
                const scrollY = window.scrollY;
                const rightBoxTop = rightBox.offsetTop;
                const rightBoxHeight = rightBox.offsetHeight;

                // Kiểm tra cuộn vượt quá 50% chiều cao box bên phải
                setIsSticky(scrollY <= rightBoxTop + rightBoxHeight / 2);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="bg-[#f0f0f0] font-['Nunito_Sans,serif'] -mt-8">
                {/* Link  */}
                <div className="xl:w-[1190px] xl:ml-[155px] pt-[40px]">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-1 text-[14px]  uppercase text-gray-600">
                            <li>
                                <Link
                                    to="/"
                                    className="block transition hover:text-gray-700"
                                >
                                    <span className="">Sách tiếng Việt</span>
                                </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="block transition hover:text-gray-700"
                                >
                                    Manga - Comic
                                </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="block transition hover:text-gray-700"
                                >
                                    Manga
                                </Link>
                            </li>
                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="block transition hover:text-gray-700"
                                >
                                    Manga Khác
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* content */}
                <div className="xl:w-[1190px] xl:ml-[155px] flex gap-3">
                    <div
                        ref={leftBoxRef}
                        className={`w-[44%] h-[725px] pt-2 ${
                            isSticky ? "sticky top-0" : "static"
                        }`}
                    >
                        <div className="w-[100%] h-[100%] rounded-md bg-white">
                            {/* images */}
                            <div className="">
                                {/* images big */}
                                <div className="pt-3 pb-4">
                                    {images.slice(0, 1).map((item) => (
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="w-[376px] h-[376px] xl:ml-[59px] xl:mt-1 object-contain cursor-pointer  "
                                        />
                                    ))}
                                </div>
                                {/* images small */}
                                <div className="flex ml-7">
                                    {images
                                        .slice(0, maxVisibleImages)
                                        .map((item) => (
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-[82px] h-[82px] rounded-md object-contain cursor-pointer hover:border-[1px] hover:border-blue-500 mr-2"
                                            />
                                        ))}
                                    {extraImages > 0 && (
                                        <div className="w-[82px] h-[82px] bg-gray-800 hover:bg-gray-900 hover:border-[1px] hover:border-blue-500 text-white hover:text-red-500 flex items-center justify-center rounded-md text-lg font-bold cursor-pointer ">
                                            +{extraImages}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* button */}
                            <div className="text-[16px] mt-5 flex ml-3">
                                <button className="w-[220px] h-[44px] mx-2 bg-white text-red-600 border-[3px] border-red-600 rounded-lg flex items-center justify-center font-semibold">
                                    <IconCart />
                                    <p>Thêm vào giỏ hàng</p>
                                </button>
                                <button className="w-[220px] h-[44px] mx-2 bg-red-600 text-white  rounded-lg flex items-center justify-center font-semibold">
                                    <p>Mua ngay</p>
                                </button>
                            </div>
                            {/* policy:chính sách */}
                            <div className="">
                                <p className="text-[17px] font-bold mt-4 ml-5 mb-4">
                                    Chính sách ưu đãi của Nvg271
                                </p>
                                {/* sub-1 */}
                                <div className="flex justify-between w-[95%] pl-4">
                                    <p className="flex">
                                        <i class="fa-solid fa-truck-fast text-red-600"></i>
                                        <span className="text-[13px] font-semibold">
                                            &nbsp;Thời gian giao hàng:&nbsp;
                                        </span>
                                        <span className="text-[13px]">
                                            Giao nhanh và uy tín
                                        </span>
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </p>
                                </div>
                                {/* sub-2 */}
                                <div className="flex justify-between w-[95%] pl-4 pt-3 pb-[11px]">
                                    <p className="flex">
                                        <i class="fa-solid fa-truck-fast text-red-600"></i>
                                        <span className="text-[13px] font-semibold">
                                            &nbsp;Chính sách đổi trả:&nbsp;
                                        </span>
                                        <span className="text-[13px]">
                                            Đổi trả miễn phí toàn quốc 30 ngày
                                        </span>
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </p>
                                </div>
                                {/* sub-3 */}
                                <div className="flex justify-between w-[95%] pl-4">
                                    <p className="flex">
                                        <i class="fa-solid fa-truck-fast text-red-600"></i>
                                        <span className="text-[13px] font-semibold">
                                            &nbsp;Chính sách khách sỉ:&nbsp;
                                        </span>
                                        <span className="text-[13px]">
                                            Ưu đãi khi mua số lượng lớn
                                        </span>
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={rightBoxRef}
                        className="w-[60%] bg-gray-200 p-4 h-[1000px]"
                    >
                        📜 <i className="fhs_icon_cart_no_stock"></i> Box bên
                        phải (Cuộn xuống để kiểm tra)
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
