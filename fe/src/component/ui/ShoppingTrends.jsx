import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; //Import CSS mặc định

const ShoppingTrends = () => {
    const [activeTab, setActiveTab] = useState(null); // Lưu trạng thái tab đang được chọn

    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex); // Cập nhật tab được chọn
    };
    return (
        <>
            <div className="xl:w-[1190px] md:w-[980px] xl:ml-[155px] md:ml-[15px] xl:rounded-md md:rounded-md bg-white mt-5 pb-2">
                {/* header ShoppingTrends */}
                <div className="bg-[#fcddef] max-w-full py-3 px-4 rounded-ss-md rounded-se-md ">
                    <div className="flex items-center">
                        <img
                            src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/icon_dealhot_new.png"
                            alt=""
                            className="xl:w-[40px]"
                        />
                        <p className="capitalize text-xl font-bold ml-2">
                            xu hướng mua sắm
                        </p>
                    </div>
                </div>
                {/* body ShoppingTrends */}
                <div className="">
                    <div className="">
                        <Tabs className="">
                            {/* Danh sách tab */}
                            <TabList className="flex items-center border-b-2 border-gray-300">
                                <Tab
                                    onClick={() => handleClick(1)} // Khi click vào tab 1{khi đổ dữ liệu thì 1 => item.id}
                                    className={`px-5 w-[200px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[20px] after:w-[80%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                        activeTab === 1 //{khi đổ dữ liệu thì 1 => item.id}
                                            ? "after:scale-x-100"
                                            : ""
                                    } focus:outline-none`}
                                    selectedClassName="text-red-600 font-semibold "
                                >
                                    Bestseller Ngoại Văn
                                </Tab>
                                <Tab
                                    onClick={() => handleClick(2)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                    className={`px-5 w-[200px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[20px] after:w-[70%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                        activeTab === 2 //{khi đổ dữ liệu thì 2 => item.id}
                                            ? "after:scale-x-100"
                                            : ""
                                    } focus:outline-none`}
                                    selectedClassName="text-red-600 font-semibold"
                                >
                                    Bestseller Kinh Tế
                                </Tab>
                                {/* Thêm các tab khác nếu cần */}
                            </TabList>

                            {/* Nội dung tab */}
                            <TabPanel>
                                {/*------------------------------------------*/
                                /*-pc - tablet */
                                /*-------------------------------------------
                                 */}
                                <div className="hidden md:flex xl:flex flex-wrap w-[100%] px-[5px] pt-2">
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
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
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                </div>
                                {/*------------------------------------------*/
                                /*-mobile */
                                /*-------------------------------------------
                                 */}
                                <div className="md:hidden xl:hidden w-[415px] md:w-[965px] xl:w-[1190px] ml-[15px] md:ml-[22px] xl:ml-[155px] mt-4 flex sub_box_2_container overflow-x-auto no-scrollbar md:overflow-hidden xl:overflow-hidden scroll-smooth">
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                {/* button more */}
                                <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[380px] xl:ml-[480px] mt-[15px] mb-[10px]">
                                    <p>Xem Thêm </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {/*------------------------------------------*/
                                /*-pc - tablet */
                                /*-------------------------------------------
                                 */}
                                <div className="hidden md:flex xl:flex flex-wrap w-[100%] px-[5px] pt-2">
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] xl:w-[220px] md:w-[190px] bg-white h-[322px] rounded-md pt-[10px] pb-[15px] px-[15px] xl:mr-[10px] md:mr-[3px] mb-[15px]">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="xl:text-[14px] md:text-[12px] mt-2 xl:w-[200px] md:w-[170px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
                                        </p>
                                        {/* price product */}
                                        <div className="">
                                            {/* new price */}
                                            <div className="xl:text-[14px] md:text-[12px] flex my-1">
                                                <p className="font-semibold mr-2 text-red-600">
                                                    60.000 đ
                                                </p>
                                                <p className="bg-red-600 text-white text-[10px] font-semibold pt-1 px-1 rounded-md">
                                                    -50%
                                                </p>
                                            </div>
                                            {/* old price */}
                                            <p className="xl:text-[13px] md:text-[11px] -mt-1 text-[#9b9999] line-through">
                                                120.000 đ
                                            </p>
                                        </div>
                                        {/* quantity sold */}
                                        <div className="text-[11px] w-[100%] bg-[#cecfd1] rounded-md flex justify-center items-center text-white mt-1 ">
                                            <p>Đã bán 0</p>
                                        </div>
                                    </div>
                                </div>
                                {/*------------------------------------------*/
                                /*-mobile */
                                /*-------------------------------------------
                                 */}
                                <div className="md:hidden xl:hidden w-[415px] md:w-[965px] xl:w-[1190px] ml-[15px] md:ml-[22px] xl:ml-[155px] mt-4 flex sub_box_2_container overflow-x-auto no-scrollbar md:overflow-hidden xl:overflow-hidden scroll-smooth">
                                    {/* content1 */}
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                    <div className="hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] w-[237px] bg-white h-[320px] rounded-md pt-[10px] pb-[15px] px-[10px] mr-3">
                                        {/* img */}
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                                src="https://cdn0.fahasa.com/media/catalog/product/1/4/1450-4141-9057.jpg"
                                                alt=""
                                                className="w-[190px] h-[190px] object-cover"
                                            />
                                        </div>
                                        {/* name product */}
                                        <p
                                            className="text-[14px] mt-2 w-[200px] cursor-pointer line-clamp-2 h-[42px]"
                                            title="Luyện Trí Não - 60 Ngày Cải Thiện Trí Não (Tái Bản 2020)"
                                        >
                                            Luyện Trí Não - 60 Ngày Cải Thiện
                                            Trí Não (Tái Bản 2020)
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
                                {/* button more */}
                                <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[380px] xl:ml-[480px] mt-[15px] mb-[10px]">
                                    <p>Xem Thêm </p>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingTrends;
