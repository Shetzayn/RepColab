import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./gamesCarousel.css"
import { useEffect } from "react";

const slidesData = [
  {
    imgSrc: "src/assets/Discover-Images/fifa.jpg",
    title: "Fifa",
    description: "Fifa es bla bla bla bla",
    categories: ["bla bla", "bla bla"],
  },
  {
    imgSrc: "src/assets/Discover-Images/fortnite.jpg",
    title: "Fortnite",
    description: "Fortnite es bla bla bla bla",
    categories: ["bla bla", "bla bla"],
  },
  {
    imgSrc: "src/assets/Discover-Images/gta5.jpg",
    title: "GTA 5",
    description: "GTA V  es bla bla bla bla",
    categories: ["bla bla", "bla bla"],
  },
  {
    imgSrc: "src/assets/Discover-Images/overwatch2.jpg",
    title: "GTA 5",
    description: "GTA V  es bla bla bla bla",
    categories: ["bla bla", "bla bla"],
  },
];

export default () => {
  



  return (
    
    <main>
      <div className="container">
        <Swiper 
        modules={[Pagination]}
        grabCursor
        initialSlide={2}
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        pagination={{clickable: true}}
        breakpoints={{
            320: {spaceBetween: 40},
            650: {spaceBetween: 30},
            1000: {spaceBetween: 20},
        }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className="title">
                <h1>{slide.title}</h1>
              </div>
              <div className="content">
                <div className="text-box">
                  <p>{slide.description}</p>
                </div>
                <div className="footer">
                  <div className="category">
                    {slide.categories.map((category, idx) => (
                      <span key={idx} style={{ "--i": idx + 1 }}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <button>
                    <span className="label">More..</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};
