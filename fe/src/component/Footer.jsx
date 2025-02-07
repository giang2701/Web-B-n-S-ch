import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-[#f0f0f0] md:pt-5 xl:pt-5">
                <div className=" xl:w-[1190px] md:w-[980px] xl:ml-[155px] md:ml-[15px]">
                    {/* Đăng kí nhận email  */}
                    <div className="hidden bg-[#a8b0b3] h-[70px] rounded-ss-xl rounded-se-xl md:flex xl:flex items-center justify-center py-10">
                        <div className="text-white text-xl font-medium uppercase mr-7">
                            <i className="fa-regular fa-envelope mr-1 "></i>
                            <span>Đăng ký nhận bản tin</span>
                        </div>
                        <div className="">
                            <form action="" className="relative">
                                <input
                                    type="text"
                                    className="w-[600px] h-[30px] text-sm text-gray-500 pl-3 py-6 rounded-md focus:border-none focus:outline-none"
                                    placeholder="Nhập địa chỉ email của bạn.."
                                />
                                <button className="absolute top-[3.5px] right-[4px] w-[125px] h-[40px] rounded-sm bg-orange-400 hover:bg-red-500 font-bold text-white">
                                    Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* footer */}
                    <div className="mt-5 pt-5 rounded-xl inline-block bg-[#f0f0f0] md:bg-white xl:bg-white w-[100%] md:h-[540px] xl:h-[500px]">
                        <div className="md:flex xl:flex">
                            {/* right */}
                            <div className="w-[100%] md:w-[32%] xl:w-[32%] pt-5 px-3 border-r-[1px] border-[#f0f0f0] md:border-gray-500 xl:border-gray-500 h-[300px]">
                                {/* logo */}
                                <div className="font-[800] text-[49px] ml-3 md:ml-0 xl:ml-0 md:font-[800] xl:font-[900] md:text-[35px] xl:text-[40px] text-[#b70b0b] mb-2 md:-mt-3 xl:-mt-3">
                                    Nvg271.c
                                    <img
                                        src="../../public/image/logo.png"
                                        alt=""
                                        className="inline-block w-[80px] -ml-[17px] -mr-[17px]"
                                    />
                                    m
                                </div>
                                <p className="text-[13px] w-[320px] md:w-[280px] xl:w-[300px] mb-3 text-center md:text-left xl:text-left ml-11 md:ml-0 xl:ml-0">
                                    Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM
                                    Công Ty Cổ Phần Phát Hành Sách TP HCM -
                                    Nvg271 60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt
                                    Nam
                                </p>

                                <p className="text-[13px] w-[310px] md:w-[275px] xl:w-[380px] mb-10 text-center md:text-left xl:text-left ml-11 md:ml-0 xl:ml-0">
                                    Nvg271.com nhận đặt hàng trực tuyến và giao
                                    hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận
                                    hàng trực tiếp tại văn phòng cũng như tất cả
                                    Hệ Thống Nvg271 trên toàn quốc.
                                </p>
                                {/* box-icon */}
                                <div className="w-[250px] flex justify-evenly items-center ml-6 md:ml-0 xl:ml-0">
                                    <i
                                        className="fa-brands fa-facebook-f w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="facebook"
                                    ></i>
                                    <i
                                        className="fa-brands fa-instagram w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="instagram"
                                    ></i>
                                    <i
                                        className="fa-brands fa-youtube w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="youtube"
                                    ></i>
                                    <i
                                        className="fa-brands fa-tumblr w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="tumblr"
                                    ></i>
                                    <i
                                        className="fa-brands fa-twitter w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="twitter"
                                    ></i>
                                    <i
                                        className="fa-brands fa-pinterest-p w-[30px] h-[30px] text-white bg-black rounded-full flex items-center justify-center cursor-pointer"
                                        title="pinterest"
                                    ></i>
                                </div>
                            </div>
                            {/* left */}
                            <div className="w-[70%] px-[40px]">
                                <div className="block md:grid xl:grid md:grid-cols-3 xl:grid-cols-3 md:gap-5 xl:gap-5">
                                    {/* col-1 */}
                                    <div className="mt-10 md:mt-0 xl:mt-0">
                                        <h3 className="text-[16px] font-bold">
                                            Dịch Vụ
                                        </h3>
                                        <Link
                                            to=""
                                            className="block  text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Điều Khoản Sử Dụng
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách bảo mật thông tin cá nhân
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách bảo mật thanh toán
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Nvg271.com
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Hệ thống trung tâm - nhà sách
                                        </Link>
                                        <h3 className="text-[16px] font-bold mt-4 mb-[2px] ">
                                            Liên hệ
                                        </h3>
                                        <p className="text-[13px]">
                                            <i className="fa-solid fa-location-dot mr-1"></i>
                                            60-62 Lê Lợi, Q.1, TP. HCM
                                        </p>
                                    </div>
                                    {/* col-2 */}
                                    <div className="mt-16 md:mt-0 xl:mt-0">
                                        <h3 className="text-[16px] font-bold">
                                            Hỗ Trợ
                                        </h3>
                                        <Link
                                            to=""
                                            className="block  text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách đổi - trả - hoàn tiền
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách bảo hành - bồi hoàn
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách vận chuyển
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chính sách khách sỉ
                                        </Link>
                                        <p className="text-[13px] pt-[71px] absolute bottom-[413px] md:static xl:static">
                                            <i className="fa-solid fa-envelope mr-1"></i>
                                            giang.nv2701@gmail.com
                                        </p>
                                    </div>
                                    {/* col-3 */}
                                    <div className="">
                                        <h3 className="text-[16px] font-bold">
                                            Tài khoản của tôi
                                        </h3>
                                        <Link
                                            to=""
                                            className="block  text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Đăng nhập/Tạo mới tài khoản
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Thay đổi địa chỉ khách hàng
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Chi tiết tài khoản
                                        </Link>
                                        <Link
                                            to=""
                                            className="block -mt-[5px] text-[13px] leading-[35px] relative hover:before:content-[''] hover:before:absolute hover:before:-left-[20px] hover:before:top-[19px] hover:before:w-[12px] hover:before:h-[1.2px] hover:before:bg-[#ea7696] hover:text-[#ea7696] hover:ml-[10px] hover:transition-all hover:ease-out  hover:duration-500"
                                        >
                                            Lịch sử mua hàng
                                        </Link>
                                        <p className="text-[13px] pt-[71px] absolute bottom-[390px] md:static xl:static">
                                            <i className="fa-solid fa-phone mr-1"></i>
                                            0385137427
                                        </p>
                                    </div>
                                </div>
                                {/* bank */}
                                <div className="md:w-[630px] xl:w-[730px] hidden md:block xl:block">
                                    {/* header img */}
                                    <div className="flex justify-around mt-7">
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png"
                                            alt=""
                                            className="w-[138px] h-[44px] object-cover"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo_lex.jpg"
                                            alt=""
                                            className="w-[90px] h-[44px]"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png"
                                            alt=""
                                            className="w-[138px] h-[44px] object-cover"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png"
                                            alt=""
                                            className="w-[138px] h-[35px] object-cover"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                            alt=""
                                            className="w-[138px] h-[44px] object-cover"
                                        />
                                    </div>
                                    {/* footer img */}
                                    <div className="flex justify-around mt-10">
                                        <img
                                            src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/vnpay_logo.png"
                                            alt=""
                                            className="w-[138px] h-[44px] object-cover"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png"
                                            alt=""
                                            className="w-[50px] h-[50px] object-cover"
                                        />
                                        <img
                                            src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png"
                                            alt=""
                                            className="w-[95px] h-[44px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* bottom */}
                        <p className="w-[400px] md:w-[900px] xl:w-[1200px] text-[13px] text-[#adadad] text-center mt-2 md:mt-9 xl:mt-9 ml-[14px] md:ml-10 xl:ml-0 mb-2 md:mb-0 xl:mb-0">
                            Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do
                            Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày
                            20/12/2005, đăng ký thay đổi lần thứ 10, ngày
                            20/05/2022.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
