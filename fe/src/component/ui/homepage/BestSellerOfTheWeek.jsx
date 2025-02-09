import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; //Import CSS mặc định

const products = [
    {
        id: 1,
        title: "Trường Ca Achilles",
        author: "Madeline Miller",
        publisher: "NXB Kim Đồng",
        price: 124800,
        oldPrice: 150000,
        content:
            "HUYỀN THOẠI BẮT ĐẦU…Hy Lạp vào thời hoàng kim của các anh hùng. Patroclus là một hoàng tử trẻ vụng về, bị trục xuất tới vương quốc Phthia và được nuôi dạy dưới sự che chở của vua Peleus cùng cậu con trai hoàng kim của ngài, Achilles. Người Hy Lạp vĩ đại nhất – mạnh mẽ, đẹp đẽ, và mang nửa dòng máu của một nữ thần – Achilles là tất cả những gì mà Patroclus không bao giờ có được. Nhưng bất chấp sự khác biệt giữa họ, hai cậu bé trở thành chiến hữu trung thành của nhau. Tình cảm giữa họ càng đậm sâu khi cả hai lớn lên thành những chàng trai trẻ, thành thạo trong kĩ nghệ chiến đấu và y dược.Khi tin tức truyền tới rằng nàng Hele...",
        image: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia-1_6_6.jpg",
        points: 1494,
        category: "Văn Học",
    },
    {
        id: 2,
        title: "48 Nguyên Tắc Chủ Chốt Của Quyền Lực (Tái Bản 2020)",
        author: "Fredrik Backman",
        publisher: "NXB Phụ Nữ",
        price: 135000,
        oldPrice: 170000,
        content:
            "Một câu chuyện đầy cảm xúc về cuộc sống của một người đàn ông cô đơn và mối quan hệ bất ngờ với những người xung quanh. Một câu chuyện về tình bạn, tình yêu, và sự tha thứ.",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_32101.jpg",
        points: 1445,
        category: "Văn Học",
    },
    {
        id: 3,
        title: "Làm Giàu Không Khó",
        author: "Tác giả D",
        publisher: "NXB Trẻ",
        price: 135000,
        oldPrice: 160000,
        content:
            "Làm Giàu Không Khó là cuốn sách chia sẻ những bí quyết về cách đầu tư và quản lý tài chính thông minh. Sách đưa ra những ví dụ thực tế và chiến lược đơn giản, dễ hiểu.",
        image: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-tr_c-manifest.jpg",
        points: 1200,
        category: "Văn Học",
    },
    {
        id: 4,
        title: "Lịch Sử Thế Giới",
        author: "Tác giả B",
        publisher: "NXB Giáo Dục",
        price: 100000,
        oldPrice: 120000,
        content:
            "Lịch sử thế giới là hành trình dài của nhân loại qua các thời kỳ. Cuốn sách giúp bạn hiểu rõ các sự kiện quan trọng và những thay đổi trong các nền văn minh lớn.",
        image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244874389.jpg",
        points: 1300,
        category: "Văn Học",
    },
    {
        id: 5,
        title: "Địa Lý Kỳ Thú",
        author: "Tác giả C",
        publisher: "NXB Đại Học Quốc Gia",
        price: 90000,
        oldPrice: 110000,
        content:
            "Cuốn sách này sẽ đưa bạn vào một chuyến du hành khám phá những địa điểm kỳ thú trên khắp thế giới, từ những ngọn núi cao vút đến những đồng cỏ rộng lớn.",
        image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775662.jpg",
        points: 1250,
        category: "Văn Học",
    },
    {
        id: 6,
        title: "Tâm Lý Học Đại Cương",
        author: "Tác giả E",
        publisher: "NXB Tâm Lý",
        price: 145000,
        oldPrice: 170000,
        content:
            "Cuốn sách này giới thiệu về các lý thuyết cơ bản trong tâm lý học, giúp người đọc hiểu rõ về hành vi con người và các phương pháp ứng dụng trong cuộc sống.",
        image: "https://cdn0.fahasa.com/media/catalog/product/z/6/z6224004432745_074ca8f8b39b40534.jpg",
        points: 1350,
        category: "Tâm Lý",
    },
    {
        id: 7,
        title: "Những Điều Kỳ Diệu Của Khoa Học",
        author: "Tác giả F",
        publisher: "NXB Khoa Học",
        price: 130000,
        oldPrice: 150000,
        content:
            "Cuốn sách này giúp người đọc khám phá những kỳ diệu của khoa học và công nghệ hiện đại, từ các khám phá vĩ đại đến các ứng dụng trong đời sống hàng ngày.",
        image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9781108430425.jpg",
        points: 1100,
        category: "Khoa Học",
    },
    {
        id: 8,
        title: "Để Tự Do Chọn Lựa",
        author: "Tác giả G",
        publisher: "NXB Văn Hóa",
        price: 125000,
        oldPrice: 150000,
        content:
            "Cuốn sách này khám phá về sự tự do trong quyết định và cách chúng ta có thể tận dụng quyền lựa chọn trong cuộc sống để đạt được những điều tốt đẹp hơn.",
        image: "https://cdn0.fahasa.com/media/catalog/product/c/h/chiasetutraitim-bia.jpg",
        points: 1450,
        category: "Khoa Học",
    },
    {
        id: 9,
        title: "Về Những Bí Ẩn Vũ Trụ",
        author: "Tác giả H",
        publisher: "NXB Vũ Trụ",
        price: 140000,
        oldPrice: 170000,
        content:
            "Cuốn sách này sẽ giúp bạn hiểu rõ hơn về vũ trụ bao la, từ những ngôi sao xa xôi đến những bí ẩn chưa được giải đáp. Những câu hỏi lớn về sự tồn tại được đưa ra và khám phá.",
        image: "https://cdn0.fahasa.com/media/catalog/product/a/t/attc-lrpjztq3d3dgcdwgl2wxppo3cfi.jpg",
        points: 1400,
        category: "Khoa Học",
    },
    {
        id: 10,
        title: "Về Những Bí Ẩn Vũ Trụ",
        author: "Tác giả H",
        publisher: "NXB Vũ Trụ",
        price: 140000,
        oldPrice: 170000,
        content:
            "Cuốn sách này sẽ giúp bạn hiểu rõ hơn về vũ trụ bao la, từ những ngôi sao xa xôi đến những bí ẩn chưa được giải đáp. Những câu hỏi lớn về sự tồn tại được đưa ra và khám phá.",
        image: "https://cdn0.fahasa.com/media/catalog/product/a/t/attc-lrpjztq3d3dgcdwgl2wxppo3cfi.jpg",
        points: 1400,
        category: "Khoa Học",
    },
    {
        id: 11,
        title: "Về Những Bí Ẩn Vũ Trụ",
        author: "Tác giả H",
        publisher: "NXB Vũ Trụ",
        price: 140000,
        oldPrice: 170000,
        content:
            "Cuốn sách này sẽ giúp bạn hiểu rõ hơn về vũ trụ bao la, từ những ngôi sao xa xôi đến những bí ẩn chưa được giải đáp. Những câu hỏi lớn về sự tồn tại được đưa ra và khám phá.",
        image: "https://cdn0.fahasa.com/media/catalog/product/a/t/attc-lrpjztq3d3dgcdwgl2wxppo3cfi.jpg",
        points: 1400,
        category: "Khoa Học",
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

const BestSellerOfTheWeek = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    // Nháp
    // const [activeTab, setActiveTab] = useState(null);
    // const handleClick = (tabIndex) => {
    //     setActiveTab(tabIndex);
    //     const selectedCategory = categories.find(
    //         (category) => category.id === tabIndex
    //     )?.name;
    //     const firstProduct = products.find(
    //         (product) => product.category === selectedCategory
    //     );
    //     setHoveredProduct(firstProduct);

    //     if (tabIndex === 7) {
    //         // Thể Loại Khác
    //         const otherCategoryProduct = products.find(
    //             (product) =>
    //                 !categories
    //                     .slice(0, 6)
    //                     .some((category) => category.name === product.category)
    //         );
    //         setHoveredProduct(otherCategoryProduct);
    //     }
    // };
    // end nháp
    const [activeTab, setActiveTab] = useState(null || categories[0]);
    useEffect(() => {
        const selectedCategory = categories.find(
            (category) => category.id === activeTab.id
        )?.name;
        const firstProduct = products.find(
            (product) => product.category === selectedCategory
        );
        setHoveredProduct(firstProduct);
    }, []);
    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex);
        const selectedCategory = categories.find(
            (category) => category.id === tabIndex
        )?.name;
        const firstProduct = products.find(
            (product) => product.category === selectedCategory
        );
        setHoveredProduct(firstProduct);

        if (tabIndex === 7) {
            // Thể Loại Khác
            const otherCategoryProduct = products.find(
                (product) =>
                    !categories
                        .slice(0, 6)
                        .some((category) => category.name === product.category)
            );
            setHoveredProduct(otherCategoryProduct);
        }
    };
    return (
        <div className="xl:w-[1190px] md:w-[980px] xl:ml-[155px] md:ml-[15px] rounded-none md:rounded-md xl:rounded-md  bg-white mt-5 pb-2">
            <div className="bg-[url('https://cdn0.fahasa.com/media/wysiwyg/Thang-6-2020/banner_vote_06_2020.png')] bg-black bg-right max-w-full py-3 px-4 rounded-none md:rounded-ss-md md:rounded-se-md xl:r   ounded-ss-md xl:rounded-se-md">
                <p className="capitalize text-sm font-bold ml-2 text-white my-1">
                    Bảng Xếp Hạng Bán Chạy Trong Tuần
                </p>
            </div>
            <Tabs>
                <TabList className="flex items-center border-b-2 border-gray-300 pl-5  w-[100%] overflow-x-auto no-scrollbar md:overflow-hidden xl:overflow-hidden scroll-smooth">
                    {categories.slice(0, 6).map((category) => (
                        <Tab
                            key={category.id}
                            onClick={() => handleClick(category.id)}
                            className={`inline-block whitespace-nowrap px-4 text-center text-sm py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                                activeTab === category.id
                                    ? "after:scale-x-100"
                                    : category.id === activeTab.id
                                    ? "after:scale-x-100"
                                    : ""
                            } focus:outline-none`}
                            selectedClassName="text-red-600 font-semibold"
                        >
                            {category.name}
                        </Tab>
                    ))}
                    <Tab
                        onClick={() => handleClick(7)}
                        className={`inline-block whitespace-nowrap px-4 ml-0 md:-ml-4 xl:-ml-4 text-center w-[200px] py-2 cursor-pointer text-gray-600 relative hover:text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-[10px] md:after:left-[40px] xl:after:left-[40px] after:w-[90%] md:after:w-[63%] xl:after:w-[63%] after:h-[2px] after:bg-red-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
                            activeTab === 7 ? "after:scale-x-100" : ""
                        } focus:outline-none`}
                        selectedClassName="text-red-600 font-semibold"
                    >
                        Thể Loại Khác
                    </Tab>
                </TabList>
                <div className="flex">
                    <div className="w-[100%] md:w-[40%] xl:w-[40%] border-r-2 mt-2">
                        {categories.slice(0, 6).map((category) => (
                            <TabPanel key={category.id}>
                                {products
                                    .filter(
                                        (product) =>
                                            product.category === category.name
                                    )
                                    .slice(0, 5)
                                    .map((product, index) => (
                                        <div
                                            className="flex items-center"
                                            key={product.id}
                                        >
                                            <div className="ml-4 mr-5">
                                                <p className="font-bold">
                                                    0{index + 1}{" "}
                                                </p>
                                                <p>
                                                    <i className="fa-solid fa-arrow-up text-green-500"></i>
                                                </p>
                                            </div>
                                            <div
                                                key={product.id}
                                                className="flex items-center gap-3 p-2 cursor-pointer w-[100%] hover:border-r-[3px] border-orange-400"
                                                onMouseEnter={() =>
                                                    setHoveredProduct(product)
                                                }
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-[100px] h-24 object-cover"
                                                />
                                                <div>
                                                    <h3 className="text-sm">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mt-[1px]">
                                                        {product.author}
                                                    </p>
                                                    <p className="text-blue-500 text-xs mt-[5px]">
                                                        {product.points} điểm
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </TabPanel>
                        ))}
                        <TabPanel>
                            {products
                                .filter(
                                    (product) =>
                                        !categories
                                            .slice(0, 6)
                                            .some(
                                                (category) =>
                                                    category.name ===
                                                    product.category
                                            )
                                )
                                .slice(0, 5)
                                .map((product, index) => (
                                    <div
                                        className="flex items-center"
                                        key={product.id}
                                    >
                                        <div className="ml-4 mr-5">
                                            <p className="font-bold">
                                                0{index + 1}{" "}
                                            </p>
                                            <p>
                                                <i className="fa-solid fa-arrow-up text-green-500"></i>
                                            </p>
                                        </div>
                                        <div
                                            key={product.id}
                                            className="flex items-center gap-3 p-2 cursor-pointer w-[100%] hover:border-r-[3px] border-orange-400"
                                            onMouseEnter={() =>
                                                setHoveredProduct(product)
                                            }
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-[100px] h-24 object-cover"
                                            />
                                            <div>
                                                <h3 className="text-sm">
                                                    {product.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-[1px]">
                                                    {product.author}
                                                </p>
                                                <p className="text-blue-500 text-xs mt-[5px]">
                                                    {product.points} điểm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </TabPanel>
                    </div>

                    <div className="hidden md:block xl:block w-[60%]">
                        {hoveredProduct && (
                            <div className="flex justify-around mt-4 ">
                                <div className="w-[30%]">
                                    <img
                                        src={hoveredProduct.image}
                                        alt={hoveredProduct.title}
                                        className="w-[200px] h-auto mx-auto object-cover ml-[10px]"
                                    />
                                </div>
                                <div className="w-[70%] pl-10">
                                    <h2 className="text-lg font-bold mt-2 md:w-[380px] xl:w-[400px]">
                                        {hoveredProduct.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Tác giả:{hoveredProduct.author}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Nhà xuất bản:{hoveredProduct.publisher}
                                    </p>
                                    <p className="font-semibold text-xl mt-4">
                                        {hoveredProduct.price.toLocaleString(
                                            "vi-VN",
                                            {
                                                style: "currency",
                                                currency: "VND",
                                            }
                                        )}
                                    </p>
                                    <div className="relative w-[100px]">
                                        <p className="line-through text-gray-500">
                                            {hoveredProduct.oldPrice.toLocaleString(
                                                "vi-VN",
                                                {
                                                    style: "currency",
                                                    currency: "VND",
                                                }
                                            )}
                                        </p>
                                        <div className="absolute -right-10 -top-1 w-[50px] py-1 px-7 bg-[#fbebca] flex justify-center rounded-md">
                                            <p className="text-orange-500 font-bold">
                                                -50%
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-justify md:w-[350px] xl:w-[420px] mt-4 leading-[22px]">
                                        {hoveredProduct.content}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Tabs>
            {/* xem tất cả */}
            <div className="w-[210px] max-w-[100%] h-10 rounded-lg cursor-pointer border-2 border-red-700 text-red-500 font-bold flex items-center justify-center text-[14px] ml-[120px] md:ml-[380px] xl:ml-[480px] mt-[15px] mb-[10px]">
                <p>Xem Thêm </p>
            </div>
        </div>
    );
};

export default BestSellerOfTheWeek;
