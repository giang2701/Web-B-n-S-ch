import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; //Import CSS mặc định

const products = [
    {
        id: 1,
        title: "Trường Ca Achilles",
        author: "Madeline Miller",
        image: "link_anh_1",
        points: 1494,
        category: "Sách Văn Học",
    },
    {
        id: 2,
        title: "Người Đàn Ông Mang Tên OVE",
        author: "Fredrik Backman",
        image: "link_anh_2",
        points: 1445,
        category: "Sách Văn Học",
    },
    {
        id: 3,
        title: "Sách Kinh Tế",
        author: "Tác giả A",
        image: "link_anh_3",
        points: 1200,
        category: "Sách Kinh Tế",
    },
    {
        id: 4,
        title: "Lịch Sử Thế Giới",
        author: "Tác giả B",
        image: "link_anh_4",
        points: 1300,
        category: "Sách Lịch Sử",
    },
    {
        id: 5,
        title: "Địa Lý Kỳ Thú",
        author: "Tác giả C",
        image: "link_anh_5",
        points: 1250,
        category: "Sách Địa Lý",
    },
];

const categories = [
    { id: 1, name: "Văn Học" },
    { id: 2, name: "Kinh Tế" },
    { id: 3, name: "Tâm Lý - Kĩ Năng Sống" },
    { id: 4, name: "Thiếu Nhi" },
    { id: 5, name: "Sách Học Ngoại Ngữ" },
    { id: 6, name: "Tâm Lý" },
    { id: 7, name: "Khoa Học" },
];

const ProductList = () => {
    const [hoveredProduct, setHoveredProduct] = useState(""); // Sản phẩm mặc định
    const [activeTab, setActiveTab] = useState(null); // Lưu trạng thái tab đang được chọn

    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex); // Cập nhật tab được chọn
    };

    return (
        <div className="xl:w-[1190px] md:w-[980px] xl:ml-[155px] md:ml-[15px] xl:rounded-md md:rounded-md bg-white mt-5 pb-2">
            {/* header ShoppingTrends */}
            <div className="bg-[url('https://cdn0.fahasa.com/media/wysiwyg/Thang-6-2020/banner_vote_06_2020.png')] bg-black bg-right max-w-full py-3 px-4 rounded-ss-md rounded-se-md ">
                <p className="capitalize text-lg font-bold ml-2 text-white my-1">
                    Bảng Xếp Hàng Bán Chạy Trong Tuần
                </p>
            </div>
            {/* body ShoppingTrends */}
            <div className="">
                <div className="">
                    <Tabs className="">
                        {/* Danh sách tab */}
                        <TabList className="flex items-center border-b-2 border-gray-300 ">
                            {/* <Tab
                                onClick={() => handleClick(2)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                className={`px-5 w-[105px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[10px] after:w-[75%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                    activeTab === 2 //{khi đổ dữ liệu thì 2 => item.id}
                                        ? "after:scale-x-100"
                                        : ""
                                } focus:outline-none`}
                                selectedClassName="text-red-600 font-semibold"
                            >
                                Kinh Tế
                            </Tab>
                            <Tab
                                onClick={() => handleClick(3)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                className={`px-2 w-[220px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[8.5px] after:w-[80%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                    activeTab === 3 //{khi đổ dữ liệu thì 2 => item.id}
                                        ? "after:scale-x-100"
                                        : ""
                                } focus:outline-none`}
                                selectedClassName="text-red-600 font-semibold"
                            >
                                Tâm Lý - Kĩ Năng Sống
                            </Tab>
                            <Tab
                                onClick={() => handleClick(4)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                className={`px-0 w-[105px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[73%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                    activeTab === 4 //{khi đổ dữ liệu thì 2 => item.id}
                                        ? "after:scale-x-100"
                                        : ""
                                } focus:outline-none`}
                                selectedClassName="text-red-600 font-semibold"
                            >
                                Thiếu Nhi
                            </Tab>
                            <Tab
                                onClick={() => handleClick(5)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                className={`px-5 w-[200px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[20px] after:w-[82%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                    activeTab === 5 //{khi đổ dữ liệu thì 2 => item.id}
                                        ? "after:scale-x-100"
                                        : ""
                                } focus:outline-none`}
                                selectedClassName="text-red-600 font-semibold"
                            >
                                Sách Học Ngoại Ngữ
                            </Tab> */}

                            {categories.slice(0, 6).map((category) => (
                                <Tab
                                    key={category.id}
                                    onClick={() => handleClick(category.id)} // Khi click vào tab 1{khi đổ dữ liệu thì 1 => item.id}
                                    className={`px-5 py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                        activeTab === category.id //{khi đổ dữ liệu thì 1 => item.id}
                                            ? "after:scale-x-100"
                                            : ""
                                    } focus:outline-none`}
                                    selectedClassName="text-red-600 font-semibold "
                                >
                                    {category.name}
                                </Tab>
                            ))}
                            <Tab
                                onClick={() => handleClick(7)} // Khi click vào tab 2 {khi đổ dữ liệu thì 2 => item.id}
                                className={`px-3 w-[200px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[10px] after:w-[60%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                    activeTab === 7 //{khi đổ dữ liệu thì 2 => item.id}
                                        ? "after:scale-x-100"
                                        : ""
                                } focus:outline-none`}
                                selectedClassName="text-red-600 font-semibold"
                            >
                                Thể Loại Khác
                            </Tab>
                        </TabList>

                        {/* Nội dung tab */}
                        <TabPanel>
                            <div className="flex w-[100%] px-[5px] pt-2">
                                <div className="w-[40%] bg-red-400">ád</div>
                                <div className="w-[60%] bg-green-400">ád</div>
                            </div>
                            <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[380px] xl:ml-[480px] mt-[15px] mb-[10px]">
                                <p>Xem Thêm </p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex w-[100%] px-[5px] pt-2">
                                <div className="w-[40%] bg-red-400">ád</div>
                                <div className="w-[60%] bg-green-400">ád</div>
                            </div>
                            <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[380px] xl:ml-[480px] mt-[15px] mb-[10px]">
                                <p>Xem Thêm </p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
        // <div className="flex">
        //     {/* Danh sách sản phẩm */}
        //     <div
        //         className="w-1/3"
        //         onMouseLeave={() => setHoveredProduct(hoveredProduct)} // Giữ lại sản phẩm cuối cùng
        //     >
        //         {products.map((product) => (
        //             <div
        //                 key={product.id}
        //                 className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200"
        //                 onMouseEnter={() => setHoveredProduct(product)}
        //             >
        //                 <img
        //                     src={product.image}
        //                     alt={product.title}
        //                     className="w-16 h-24"
        //                 />
        //                 <div>
        //                     <h3 className="font-semibold">{product.title}</h3>
        //                     <p className="text-sm text-gray-500">
        //                         {product.author}
        //                     </p>
        //                     <p className="text-blue-500">
        //                         {product.points} điểm
        //                     </p>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        //     {/* Hiển thị sản phẩm được chọn */}
        //     <div className="w-2/3 p-4">
        //         {hoveredProduct && (
        //             <div>
        //                 <img
        //                     src={hoveredProduct.image}
        //                     alt={hoveredProduct.title}
        //                     className="w-64 h-auto mx-auto"
        //                 />
        //                 <h2 className="text-xl font-bold">
        //                     {hoveredProduct.title}
        //                 </h2>
        //                 <p className="text-gray-600">{hoveredProduct.author}</p>
        //             </div>
        //         )}
        //     </div>
        // </div>
    );
};

export default ProductList;
