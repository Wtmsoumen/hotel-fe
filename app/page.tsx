import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import TopRatedHotels from "./components/TopRatedHotels";
import PremiumExperiences from "./components/PremiumExperiences";
import HotelCategories from "./components/HotelCategories";
import ExploreBeauty from "./components/ExploreBeauty";
import TrendingDestinations from "./components/TrendingDestinations";
import LastMinuteDeals from "./components/LastMinuteDeals";
import ExploreIndia from "./components/ExploreIndia";
import BestMemorablePlaces from "./components/BestMemorablePlaces";
import BestPackages from "./components/BestPackages";
import CustomerFeedback from "./components/CustomerFeedback";
import PackageBooking from "./components/PackageBooking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <TopRatedHotels />
      {/* <PremiumExperiences /> */}
      <HotelCategories />
      <ExploreBeauty />
      <TrendingDestinations />
      <LastMinuteDeals />
      <ExploreIndia />
      <BestMemorablePlaces />
      <BestPackages />
      <CustomerFeedback />
      <PackageBooking />
    </main>
  );
}
