import React, { useState } from "react";
import { useParentCate } from "../context/ParentBook";
import { Link } from "react-router-dom";
const Header = () => {
    const [nav, setNav] = useState(false); // pc or tablet
    const [navMobile, setNavMobile] = useState(false); // mobile
    const { parent } = useParentCate();
    // console.log(parent);
    // hidden nav mobile
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            <div className="w-full relative z-30 pb-[10px]">
                {/* banner header */}
                <div className="w-full bg-[#b70b0b] h-[40px] md:h-[62px] text-center pt-[7px] md:pt-0 md:pb-6">
                    <img
                        src="../../public/image/BGV_SmallBanner_T11_Header_1263x60_1.webp"
                        alt=""
                        className="md:mx-auto hidden md:block"
                    />
                    <div
                        className="font-[900] text-[18px] text-[#f73636] lg:ms-5 lg:me-1 xl:me-3 md:hidden"
                        style={{
                            textShadow:
                                "2px 2px 4px #ffffff, -2px -2px 4px #ffffff",
                        }}
                    >
                        Nvg271.c🍅m
                    </div>
                </div>
                {/* body */}
                <div className="flex justify-center h-16 xl:h-[80px]  bg-[#b70b0b] md:bg-white xl:pt-[5px]">
                    <div className="w-full ms-2 lg:w-full xl:w-[1263px] flex items-center">
                        {/* logo */}
                        <div className="font-[600] text-[15px] lg:font-[800] lg:text-[25px] xl:font-[900] xl:text-[30px] text-[#b70b0b]  lg:ms-5  lg:me-1 xl:me-3 hidden md:block">
                            Nvg271.c🍅m
                        </div>
                        {/* bar-pc */}
                        <div
                            className="cursor-pointer flex items-center ms-0 md:ms-5 hidden md:block"
                            onClick={() => {
                                setNav(!nav);
                            }}
                        >
                            {nav ? (
                                <>
                                    <i className="fa-solid fa-bars-staggered text-lg  lg:text-2xl xl:text-3xl"></i>
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-bars text-lg lg:text-2xl  xl:text-3xl"></i>
                                </>
                            )}
                            <i className="fa-solid fa-angle-down text-[15px] md:text-[20px] ms-1"></i>
                        </div>
                        {/* bar-mobile */}
                        <div
                            className="cursor-pointer flex items-center ms-0 block md:hidden text-white"
                            onClick={() => {
                                setNavMobile(!navMobile);
                            }}
                        >
                            {nav ? (
                                <>
                                    <i className="fa-solid fa-bars-staggered text-lg  lg:text-2xl xl:text-3xl"></i>
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-bars text-lg lg:text-2xl  xl:text-3xl"></i>
                                </>
                            )}
                            <i className="fa-solid fa-angle-down text-[15px] md:text-[20px] ms-1"></i>
                        </div>

                        {/* search */}
                        <div className="w-[315px]  md:w-[400px] xl:w-[550px] max-w-full ms-2 md:ms-5">
                            <form action="" className="relative">
                                <input
                                    type="text"
                                    className="w-full h-[35px] md:h-[50px] border-[3px] border-[#f0f0f0] rounded-md pl-3 text-[12px] md:text-[18px]"
                                    placeholder="Tìm kiếm tri thức nào bạn!!!😘"
                                />
                                <button className="absolute w-[60px] md:w-[80px] h-[32px] md:h-[42px] rounded-xl bg-[#ca2128] right-[3px] top-[1.5px] md:top-[4px]">
                                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                                </button>
                            </form>
                        </div>
                        {/* action */}
                        <div
                            className="flex justify-evenly ms-0 lg:ms-6 xl:ms-5 lg:w-[250px] xl:w-[300px] items-center text-white md:text-[#8b8888] capitalize"
                            hidden
                        >
                            {/* cart */}
                            <div className="text-center hidden md:block">
                                <i className="fa-solid fa-bell lg:text-md xl:text-lg"></i>
                                <p>Notification</p>
                            </div>
                            {/* cart */}
                            <div className="text-center ms-2 md:ms-0">
                                <i className="fa-solid fa-cart-shopping text-xl lg:text-md xl:text-lg"></i>
                                <p className="hidden md:block">My cart</p>
                            </div>
                            {/* account */}
                            <div className="text-center ms-2 md:ms-0">
                                <i className="fa-solid fa-user text-xl lg:text-md xl:text-lg"></i>
                                <p className="hidden md:block">Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*nav-pc */}
            <div className="hidden md:block absolute z-20 xl:left-1/2 xl:-translate-x-[50%]">
                {nav ? (
                    <>
                        <div className="w-[1006px] xl:w-[1223px] mx-auto relative z-30 -mt-[10px] bg-red-400">
                            <div className="bg-white h-full pb-10">
                                {/* header-nav */}
                                <div className="ms-10 pt-2">
                                    <i className="fa-solid fa-book text-2xl text-red-500"></i>
                                    <span className="text-xl font-bold ms-2">
                                        Sách Trong Nước
                                    </span>
                                </div>
                                {/* body nav */}
                                <div className="w-[800px] xl:w-[1000px] ml-16 mt-2 grid grid-cols-4 gap-x-10 xl:gap-x-3 gap-y-4 cursor-pointer">
                                    {parent.map((item) => (
                                        <div className="">
                                            <p className="text-lg font-bold mb-1 ">
                                                <Link to="/">{item.name}</Link>
                                            </p>
                                            <ul className="ms-2 ">
                                                {item.children.map((child) => (
                                                    <li className="mt-2 text-[13px] hover:text-yellow-600">
                                                        {child.name}
                                                    </li>
                                                ))}
                                                <Link
                                                    to="/"
                                                    className="text-[12px] text-blue-500 underline"
                                                >
                                                    {" "}
                                                    Xem tất cả..
                                                </Link>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {/* overlayPC */}
                {nav ? (
                    <>
                        <div
                            className="absolute -left-[165px] top-0 w-[114vw] xl:w-[100vw] h-[100vh] bg-[#3b3a3a80] z-10 "
                            onClick={() => {
                                setNav(false);
                            }}
                        ></div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            {/* nav-mobile */}
            <div className="block md:hidden ">
                <div
                    className={`fixed top-0 bottom-0 left-0 right-0 z-50 transition-all ease-out duration-500   ${
                        navMobile ? " translate-x-0 " : " -translate-x-[100%]"
                    }`}
                >
                    <div className="w-full bg-[#f0f0f0] h-[1000px]">
                        {/* Header-Nav-mobile */}
                        <div className="flex items-center bg-[#b70b0b] min-h-[50px]">
                            <div
                                className=""
                                onClick={() => {
                                    setNavMobile(false);
                                }}
                            >
                                <i className="fa-solid fa-arrow-left text-white ml-3"></i>
                            </div>
                            <p className="ml-[125px] text-white font-semibold">
                                Product Category
                            </p>
                        </div>
                        {/* body-nav */}
                        <div className="flex">
                            {/* left */}
                            <div className="flex flex-col justify-center  bg-white w-[110px] min-w-[110px] h-[100px] text-center rounded-e-md pr-[7px]  border-l-4 border-[#ff3535]">
                                <i className="fa-solid fa-book text-2xl text-red-500"></i>
                                <span className="text-md font-bold ms-2">
                                    Sách Trong Nước
                                </span>
                            </div>
                            {/* right */}
                            <div className="h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                {parent.map((item, index) => (
                                    <div key={item.id || index}>
                                        <div
                                            className="w-[310px] pl-[7px]"
                                            onClick={() =>
                                                setActiveIndex(
                                                    activeIndex === index
                                                        ? null
                                                        : index
                                                )
                                            }
                                        >
                                            <div className="flex bg-white p-3 mt-[6px] rounded-md">
                                                {activeIndex === index ? (
                                                    <p className="text-[#b70b0b] font-bold">
                                                        {item.name}
                                                    </p>
                                                ) : (
                                                    <p className="font-bold">
                                                        {item.name}
                                                    </p>
                                                )}

                                                {activeIndex === index ? (
                                                    <i className="fa-solid fa-sort-up text-[#b70b0b] ml-auto mt-2"></i>
                                                ) : (
                                                    <i className="fa-solid fa-sort-down  ml-auto"></i>
                                                )}
                                            </div>
                                        </div>
                                        {activeIndex === index && (
                                            <ul className="ms-2 ">
                                                {item.children.map((child) => (
                                                    <>
                                                        <li
                                                            key={child.id}
                                                            className="text-[13px] hover:text-yellow-600 bg-white p-3 w-[300px] flex justify-between items-center text-[#828181]"
                                                        >
                                                            {child.name}
                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </li>
                                                    </>
                                                ))}
                                                <Link
                                                    to="/"
                                                    className="text-[12px] text-blue-500  bg-white p-3 w-[300px] flex justify-between items-center"
                                                >
                                                    Xem tất cả..
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </Link>
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
