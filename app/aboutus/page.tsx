"use client";

import ListingFAQ from "../listing/components/ListingFAQ";
import FacilitiesSection from "./components/FacilitiesSection";
import GallerySection from "./components/GallerySection";
import RoomsCarousel from "./components/RoomsCarousel";
import FeaturesSection from "./components/FeaturesSection";
import WelcomeSection from "./components/WelcomeSection";
import HeroSection from "./components/HeroSection";



export default function AboutUsPage() {
    return (
        <>
            <HeroSection />
            <WelcomeSection />
            <FeaturesSection />
            <RoomsCarousel />
            <GallerySection />
            <FacilitiesSection />
            <ListingFAQ />
        </>
    );
}