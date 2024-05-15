// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import y1 from "../../assets/image/slider/s3.jpg";
import b1 from "../../assets/image/slider/s2.jpg";
import s1 from "../../assets/image/slider/s1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

export const Carasoul = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[300px]  md:h-[500px]"
            style={{
              backgroundImage: `url(${y1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 md:text-3xl text-2xl lg:text-4xl font-bold">
                  {" "}
                  Welcome to Wisdom Library
                </h1>
                <p className="mb-5">
                  your digital gateway to endless reading adventures!
                </p>
                <Link
                  to="/all"
                  className="btn md:btn-md btn-sm bg-orange-500 text-white"
                >
                  Explore Our Library
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[300px] md:h-[500px]"
            style={{
              backgroundImage: `url(${b1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 md:text-3xl text-2xl lg:text-4xl font-bold">
                  {" "}
                  Welcome to Wisdom Library
                </h1>
                <p className="mb-5">
                  your digital gateway to endless reading adventures!
                </p>
                <Link
                  to="/all"
                  className="btn md:btn-md btn-sm bg-orange-500 text-white"
                >
                  Explore Our Library
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[300px] md:h-[500px]"
            style={{
              backgroundImage: `url(${s1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 md:text-3xl text-2xl lg:text-4xl font-bold">
                  {" "}
                  Welcome to Wisdom Library
                </h1>
                <p className="mb-5">
                  your digital gateway to endless reading adventures!
                </p>
                <Link
                  to="/all"
                  className="btn md:btn-md btn-sm bg-orange-500 text-white"
                >
                  Explore Our Library
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
