import React, { useContext, useRef, useState } from "react";
import { ProductsContext } from "../../context/ContextProducts";
import Banner from "../../component/Banner";

const Home = () => {
    // để mặc định là phone
    // md:talet
    // xl:pc
    const { data } = useContext(ProductsContext);
    // console.log(data);
    const scrollRef = useRef(null);
    const [isActive, setIsActive] = useState("");

    const handleScroll = (direction) => {
        setIsActive(direction);
        if (scrollRef.current) {
            const scrollAmount = direction === "right" ? 1500 : -1500; // Độ dài lướt
            scrollRef.current.scrollLeft += scrollAmount;
        }
    };
    const[like,setLike]= useState(false)
    return (
        <div className="bg-[#f0f0f0] h-[3000px] relative">
            {/* utilities:tiện ích */}
            <div className="hidden md:inline-block xl:inline-block bg-[#7a7e7f] absolute w-[50px] h-[90px] rounded-s-lg xl:top-10 xl:right-0 py-4">
                {/* like */}
                <div className="hover:bg-red-400 h-[45px] -mt-4 rounded-ss-lg py-[12px]">
                    <i className="fa-regular fa-thumbs-up  xl:text-lg xl:ml-[11px] w-[30px] bg-white flex justify-center items-center rounded-ss-lg rounded-ee-lg mb-3 -mt-[5px] cursor-pointer"></i>
                </div>
                {/* book */}
                <div className="hover:bg-red-400 h-[45px] mt-0 rounded-es-lg pt-[5px] pb-[12px]">
                    <i className="fa-solid fa-book-open text-white xl:text-2xl xl:ml-3 cursor-pointer"></i>
                </div>
            </div>
            {/* banner */}
            <div className="-mt-8 xl:ms-40">
                <Banner />
            </div>
            {/* box danh mục */}
            <div className="hidden md:block xl:block ml-0 rounded-md mt-[25px] md:w-[990px] xl:w-[1190px] md:ml-[16px] xl:ml-[155px] bg-white ">
                <div className="md:p-5 xl:p-5">
                    {/* header box danh mục  */}
                    <div className="flex xl:pt-0 xl:py-2 md:pb-4 xl:pb-4 md:border-b md:border-[#bababc] xl:border-b xl:border-[#bababc] ">
                        <i className="fa-solid fa-layer-group md:text-[32px] xl:text-[32px] md:text-red-500 xl:text-red-500 md:mr-[15px] xl:mr-[15px]"></i>
                        <p className="text-2xl font-bold text-[#212121]">
                            Danh mục sản phẩm
                        </p>
                    </div>
                    {/* body box danh mục  */}
                    <div className="md:mt-4 xl:mt-4 md:px-3 xl:px-3 md:pt-5 xl:pt-5 md:pb-5 xl:pb-5 flex flex-wrap">
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3 md:hidden xl:block">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                        {/* sub-box-1 */}
                        <div className="md:mr-[15px] xl:mr-3 md:hidden xl:block">
                            <img src="https://placehold.co/100x100" alt="" />
                            <p className="md:ml-[14px] xl:ml-[14px] md:mt-1 xl:mt-1">
                                Thú Bông
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* flash Sale */}
            <div className="w-full bg-gradient-to-b from-[#fe6a68] to-[#fe564d] xl:mt-5 h-[450px]">
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
                            <p className="text-[#929394] md:text-[#1478FC] xl:text-[#1478FC] font-semibold">
                                <span className="hidden md:inline-block xl:inline-block">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
                                    Luyện Trí Não - 65 Ngày Cải Thiện Trí Não
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
                            <div className="w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                {/* img */}
                                <div className="flex justify-center ">
                                    <img
                                        src="https://placehold.co/190x190"
                                        alt=""
                                    />
                                </div>
                                {/* name product */}
                                <p className="text-[14px] mt-2 w-[200px]">
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
        </div>
    );
};

export default Home;
