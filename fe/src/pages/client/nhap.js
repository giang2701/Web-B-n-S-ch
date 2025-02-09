import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-autoplay.css";

const ImageGallery = () => {
    useEffect(() => {
        const container = document.querySelector(".masonry-gallery-demo");
        if (container) {
            const msnry = new Masonry(container, {
                itemSelector: ".gallery-item",
                columnWidth: ".grid-sizer",
                percentPosition: true,
            });

            imagesLoaded(container).on("progress", () => {
                msnry.layout();
            });
        }
    }, []);

    return (
        <div>
            <LightGallery
                elementClassNames={"masonry-gallery-demo"}
                plugins={[lgZoom, lgShare, lgHash, lgAutoplay]}
                speed={500}
                autoplay={true}
                pause={3000}
                progressBar={true}
            >
                <div className="grid-sizer"></div>
                <a
                    data-lg-size="1600-1067"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd'>Tobias Rademacher</a></h4><p>Location - Italy</p>"
                >
                    <img
                        alt="Beautiful Landscape"
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=240&q=80"
                    />
                </a>
                <a
                    data-lg-size="1600-1067"
                    className="gallery-item"
                    data-src="https://bizweb.dktcdn.net/100/202/714/articles/201546141936268.jpg?v=1493004266287"
                    data-sub-html="<h4>Mountain View</h4><p>Location - Alps</p>"
                >
                    <img
                        alt="Mountain View"
                        className="img-responsive"
                        src="https://bizweb.dktcdn.net/100/202/714/articles/201546141936268.jpg?v=1493004266287"
                    />
                </a>
                {/* Kiểm tra xem không có thẻ <a> nào bị thiếu ở đây */}
            </LightGallery>
        </div>
    );
};

export default ImageGallery;
