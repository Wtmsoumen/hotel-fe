import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingDestinations from "../components/TrendingDestinations";
import ListingHero from "./components/ListingHero";
import LuxuryHotels from "./components/LuxuryHotels";
import PopularHotels from "./components/PopularHotels";
import ExploreBestHotel from "./components/ExploreBestHotel";
import PoolBanner from "./components/PoolBanner";
import RoomCollections from "./components/RoomCollections";
import ListingFAQ from "./components/ListingFAQ";

export default function ListingPage() {
  return (
    <main>
      
      <ListingHero />
      <LuxuryHotels />
      <PopularHotels />
      <ExploreBestHotel />
      <PoolBanner />
      <RoomCollections />
      <TrendingDestinations />
      <ListingFAQ />
    </main>
  );
}
