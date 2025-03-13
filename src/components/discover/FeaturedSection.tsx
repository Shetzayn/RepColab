import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const featuredGames = [
  {
    title: "Counter-Strike 2",
    image: "src/assets/Discover-Images/fifa.jpg",
    thumbnails: [
      "src/assets/Discover-Images/fifa.jpg",
      "src/assets/Discover-Images/fortnite.jpg",
      "src/assets/Discover-Images/gta5.jpg",
    ],
    tags: ["Lo más vendido", "Ya disponible", "Juego gratuito"],
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-gray-900 text-white py-6 px-4 rounded-xl max-w-4xl mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">
        Destacados y recomendados
      </h2>

      {/* Carrusel Principal */}
      <div className="w-full max-w-3xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          className="rounded-lg shadow-lg max-w-3xl mx-auto"
        >
          {featuredGames.map((game, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full object-cover rounded-lg aspect-[16/9]"
              />

              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-md text-lg">
                {game.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-2 mt-4">
        {featuredGames[0].thumbnails.map((thumb, idx) => (
          <img
            key={idx}
            src={thumb}
            className="w-16 h-12 md:w-20 md:h-16 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Etiquetas */}
      <div className="flex justify-between mt-4">
        {featuredGames[0].tags.map((tag, idx) => (
          <span key={idx} className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
