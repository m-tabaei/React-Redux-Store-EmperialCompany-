import { Navigation, Pagination, A11y } from "swiper/modules";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useDarkMode } from "../../DarkMode/DarkModeContext";

function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const swiperRef = useRef(null);
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-storeg-emperial.vercel.app/sliders"
        );
        if (!response.ok) {
          throw new Error("Error.message");
        }
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    fetchData();
  }, []);

  const changeSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { swiper } = swiperRef.current;
      if (swiper.activeIndex < swiper.slides.length - 1) {
        swiper.slideNext();
      } else {
        swiper.slideTo(0);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`homecontainer ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, A11y, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.alt} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
