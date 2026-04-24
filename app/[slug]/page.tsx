import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelHero from "./components/HotelHero";
import HotelGalleryBooking from "./components/HotelGalleryBooking";
import HotelInfoBadges from "./components/HotelInfoBadges";
import HotelTabs from "./components/HotelTabs";
import HotelOverview from "./components/HotelOverview";
import HotelRooms from "./components/HotelRooms";
import HotelAmenities from "./components/HotelAmenities";
import TripInspirationDetail from "./components/TripInspirationDetail";
import WhereToGo from "./components/WhereToGo";
import PlanYourTrip from "./components/PlanYourTrip";
import BookingProcess from "./components/BookingProcess";

const hotelData = {
  name: "Somerset Downtown",
  rating: 4,
  reviewCount: 412,
  pricePerNight: 2295,
  heroImage: "https://picsum.photos/seed/hotel-hero-det/1600/700",
  images: [
    "https://picsum.photos/seed/hotel-det-main/900/600",
    "https://picsum.photos/seed/hotel-det-g1/400/300",
    "https://picsum.photos/seed/hotel-det-g2/400/300",
  ],
};

export default function HotelDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <HotelHero name={hotelData.name} image={hotelData.heroImage} />
      <HotelGalleryBooking
        images={hotelData.images}
        pricePerNight={hotelData.pricePerNight}
        rating={4.2}
        reviewCount={145}
      />
      <HotelInfoBadges name={hotelData.name} rating={hotelData.rating} reviewCount={hotelData.reviewCount} />
      <HotelTabs />
      <HotelOverview />
      <HotelRooms />
      <HotelAmenities />
      <TripInspirationDetail />
      <WhereToGo />
      <PlanYourTrip />
      <BookingProcess />
    </main>
  );
}
