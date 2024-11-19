import React, { useState } from "react";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? 3 : activeIndex - 1); // Quay lại ảnh trước, nếu ở ảnh đầu tiên thì quay về ảnh cuối.
    };

    const handleNext = () => {
        setActiveIndex(activeIndex === 3 ? 0 : activeIndex + 1); // Chuyển đến ảnh tiếp theo, nếu ở ảnh cuối cùng thì quay về ảnh đầu.
    };

    return (
        <>
            <div className="flex mt-2 md:mt-0 md:justify-center xl:justify-start">
                <div
                    id="default-carousel"
                    className="relative w-[800px] "
                    data-carousel="slide"
                >
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* Item 1 */}
                        <div
                            className={`duration-700 ease-in-out ${
                                activeIndex === 0 ? "" : "hidden"
                            }`}
                            data-carousel-item
                        >
                            <img
                                src="../../public/image/banner_1.webp"
                                alt="Banner 1"
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                            />
                        </div>

                        {/* Item 2 */}
                        <div
                            className={`duration-700 ease-in-out ${
                                activeIndex === 1 ? "" : "hidden"
                            }`}
                            data-carousel-item
                        >
                            <img
                                src="../../public/image/banner_2.webp"
                                alt="Banner 2"
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                            />
                        </div>

                        {/* Item 3 */}
                        <div
                            className={`duration-700 ease-in-out ${
                                activeIndex === 2 ? "" : "hidden"
                            }`}
                            data-carousel-item
                        >
                            <img
                                src="../../public/image/banner_3.webp"
                                alt="Banner 3"
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                            />
                        </div>

                        {/* Item 4 */}
                        <div
                            className={`duration-700 ease-in-out ${
                                activeIndex === 3 ? "" : "hidden"
                            }`}
                            data-carousel-item
                        >
                            <img
                                src="../../public/image/banner_4.webp"
                                alt="Banner 4"
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute z-30 flex  bottom-9 md:bottom-12 left-[43%] md:left-[45%] space-x-3 rtl:space-x-reverse">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-2 md:w-3 h-2 md:h-2 rounded-full ${
                                    activeIndex === index
                                        ? "bg-red-600"
                                        : "bg-white"
                                }`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Slider controls */}
                    <button
                        type="button"
                        className="absolute top-0 -left-3 md:-left-7 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={handlePrev}
                    >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-[10px] h-[10px] text-[#686666] dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 right-1 md:-right-7 end-0 z-30 flex items-center justify-center h-full px-0 md:px-4 cursor-pointer group focus:outline-none"
                        onClick={handleNext}
                    >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-[10px] h-[10px] text-[#686666] dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div className="mt-10 ms-2 hidden xl:block">
                    <img
                        src="../../public/image/banner_1.webp"
                        alt=""
                        className="w-[370px] h-[150px] rounded-xl mb-1"
                    />
                    <img
                        src="../../public/image/banner_5.webp"
                        alt=""
                        className="w-[370px] h-[150px] rounded-xl"
                    />
                </div>
            </div>
            <div className="hidden  w-[980px] xl:w-[1180px] md:grid grid-cols-4 gap-3 -mt-5 md:mx-auto xl:mx-0">
                <img
                    src="../../public/image/banner_6.webp"
                    alt=""
                    className="rounded-lg"
                />
                <img
                    src="../../public/image/banner_7.webp"
                    alt=""
                    className="rounded-lg"
                />
                <img
                    src="../../public/image/banner_8.webp"
                    alt=""
                    className="rounded-lg"
                />
                <img
                    src="../../public/image/banner_9.webp"
                    alt=""
                    className="rounded-lg"
                />
            </div>
        </>
    );
};

export default Banner;
