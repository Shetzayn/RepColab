import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "src/assets/Discover-Images/fifa.jpg",
  "src/assets/Discover-Images/fortnite.jpg",
  "src/assets/Discover-Images/gta5.jpg",
];

const Hero = () => {
  return (
    <section className="w-full py-6 bg-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <Carousel
          showArrows={true}
          showThumbs={true}
          showStatus={true}
          infiniteLoop
          autoPlay
          interval={3000}
          className="rounded-lg shadow-lg"
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-[250px] md:h-[400px]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              
            </div>
          ))}
        </Carousel>
      </div>      
    </section>
  );
};

export default Hero;
