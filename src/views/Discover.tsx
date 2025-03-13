
import GamesCarousel from "../components/discover/Games-carousel";
import Hero from "../components/discover/Hero";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedSection from "../components/discover/FeaturedSection";

const Discover = () => {
    return (
        <>
        <MainLayout/>
            <GamesCarousel/>
            <GamesCarousel/>
        </>    
    );
};

export default Discover;