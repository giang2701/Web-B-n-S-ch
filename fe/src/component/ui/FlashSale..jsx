import React, { useRef, useState } from "react";

const FlashSale = () => {
    const scrollRef = useRef(null);
    const [isActive, setIsActive] = useState("");

    const handleScroll = (direction) => {
        setIsActive(direction);
        if (scrollRef.current) {
            const scrollAmount = direction === "right" ? 1500 : -1500; // Độ dài lướt
            scrollRef.current.scrollLeft += scrollAmount;
        }
    };
    return (
        <>
            {/* flash Sale */}
            <div className="w-full bg-[url(https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg)] bg-center xl:mt-5 md:mt-5 h-[450px]">
                <div className="mt-[15px] inline-block">
                    {/* box-1 */}
                    <div className="bg-white w-[410px] md:w-[970px] xl:w-[1190px] ml-[10px] md:ml-[18px] xl:ml-[155px] px-[18px] py-[15px] md:py-[20px] xl:py-[24px] rounded-lg flex justify-between items-center">
                        {/* left */}
                        <div className="flex items-center">
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q="
                                alt=""
                            />
                            <div className="flex items-center">
                                <p className="ml-3 font-medium text-[19px] hidden md:inline-block xl:inline-block">
                                    Kết thúc trong
                                </p>
                                {/* fake time */}
                                <div className="ml-2 md:ml-2 xl:ml-2 flex">
                                    <p className="bg-black text-white py-1 px-[6px] rounded-md">
                                        00
                                    </p>
                                    <p className="text-xl mx-1">:</p>
                                    <p className="bg-black text-white py-1 px-[6px] rounded-md">
                                        03
                                    </p>
                                    <p className="text-xl mx-1">:</p>
                                    <p className="bg-black text-white py-1 px-[6px] rounded-md">
                                        50
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="mr-0 md:mr-5 xl:mr-5">
                            <p className="text-[#929394] md:text-[#1478FC] xl:text-[#1478FC] font-semibold cursor-pointer">
                                <span className="hidden md:inline-block xl:inline-block ">
                                    Xem tất cả
                                </span>{" "}
                                <span className="text-xl md:text-sm xl:text-sm">
                                    &#62;
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* box-2 */}
                    <div className="box_2_container relative ">
                        {/* button left */}
                        <div className="hidden md:inline xl:inline ">
                            {isActive !== "right" ? (
                                <>
                                    {" "}
                                    <div
                                        className="absolute hidden md:left-0 xl:left-[135px] top-[42%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                        onClick={() => handleScroll("left")}
                                    >
                                        <p>&#60;</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <div
                                        className="absolute md:left-0 xl:left-[135px] top-[42%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                        onClick={() => handleScroll("left")}
                                    >
                                        <p>&#60;</p>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* content */}
                        <div
                            className="w-[415px] md:w-[965px] xl:w-[1190px] ml-[15px] md:ml-[22px] xl:ml-[155px] mt-4 flex sub_box_2_container overflow-x-auto no-scrollbar md:overflow-hidden xl:overflow-hidden scroll-smooth"
                            ref={scrollRef}
                        >
                            {/* content1 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content3 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content4 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content5 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content6 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content7 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center  cursor-pointer">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content8 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content9 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                            {/* content10 */}
                            <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
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
                                    Luyện Trí Não - 60 Ngày Cải Thiện Trí Não
                                    (Tái Bản 2020)
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
                        </div>
                        {/* button right */}
                        <div className="hidden md:inline xl:inline ">
                            {isActive === "right" ? (
                                <>
                                    <div
                                        className="absolute hidden -right-5 top-[42%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                        onClick={() => handleScroll("right")}
                                    >
                                        <p>&#62;</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="absolute  -right-5 top-[42%] cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)]  w-[40px] h-[40px] bg-white flex justify-center items-center  rounded-full font-semibold text-xl text-[#a19f9f] pt-[2px]"
                                        onClick={() => handleScroll("right")}
                                    >
                                        <p>&#62;</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashSale;
