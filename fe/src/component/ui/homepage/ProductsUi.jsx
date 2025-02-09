import React, { useRef, useState } from "react";

const ProductsUi = () => {
    const scrollRef = useRef(null);
    const [isActive, setIsActive] = useState("");

    const handleScroll = (direction) => {
        setIsActive(direction);
        if (scrollRef.current) {
            const scrollAmount = direction === "right" ? 1170 : -1170; // Độ dài lướt
            scrollRef.current.scrollLeft += scrollAmount;
        }
    };
    return (
        <>
            {/* product  */}
            {/* lưu ý nên làm 1 trường để thay background {bg-[url(https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2025/Web_BlockTet2025_v2.png)]} */}
            <div className="xl:w-[1190px] xl:ml-[155px] xl:rounded-md h-[520px] xl:mt-7 bg-[url(https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2025/Web_BlockTet2025_v2.png)] bg-cover">
                <div className="box_2_container relative ">
                    {/* button left */}
                    <div className="hidden md:inline xl:inline ">
                        {isActive !== "right" ? (
                            <>
                                {" "}
                                <div
                                    className="absolute hidden md:left-0 xl:-left-5 top-[70%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                    onClick={() => handleScroll("left")}
                                >
                                    <p>&#60;</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {" "}
                                <div
                                    className="absolute md:left-0 xl:-left-5 top-[70%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                    onClick={() => handleScroll("left")}
                                >
                                    <p>&#60;</p>
                                </div>
                            </>
                        )}
                    </div>
                    {/* content */}
                    <div
                        className="w-[415px] md:w-[965px] xl:w-[1170px] ml-[15px] md:ml-[22px] xl:ml-[12px] pt-[120px] md:pt-[110px] xl:pt-[110px]  mt-4 flex sub_box_2_container overflow-x-auto no-scrollbar md:overflow-hidden xl:overflow-hidden scroll-smooth pb-1"
                        ref={scrollRef}
                    >
                        {/* content1 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content2 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content3 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content4 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content5 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content6 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content7 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content8 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content9 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                        {/* content10 */}
                        <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[270px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[15px] mr-1">
                            {/* img */}
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    src="https://placehold.co/190x190"
                                    alt=""
                                    className="w-[190px] h-[190px] object-cover"
                                />
                            </div>
                            {/* name product */}
                            <p
                                className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                            >
                                Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái
                                Bản 2020)
                            </p>
                            {/* price product */}
                            <div className="">
                                {/* new price */}
                                <div className="text-[14px] flex my-1">
                                    <p className="font-semibold mr-2 text-red-600">
                                        60.000 đ
                                    </p>
                                    <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                        -50%
                                    </p>
                                </div>
                                {/* old price */}
                                <p className="text-[13px] -mt-1 text-[#9b9999] line-through">
                                    120.000 đ
                                </p>
                            </div>
                            {/* quantity sold */}
                            <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                <p>Đã bán 0</p>
                            </div>
                        </div>
                    </div>
                    {/* button right */}
                    <div className="hidden md:inline xl:inline">
                        {isActive === "right" ? (
                            <>
                                <div
                                    className="absolute hidden md:right-1  xl:-right-5 top-[70%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                    onClick={() => handleScroll("right")}
                                >
                                    <p>&#62;</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute md:right-1 xl:-right-5 top-[70%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                    onClick={() => handleScroll("right")}
                                >
                                    <p>&#62;</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* button more */}
                <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[400px] xl:ml-[480px] mt-[25px]">
                    <p>Xem Thêm </p>
                </div>
            </div>
        </>
    );
};

export default ProductsUi;
