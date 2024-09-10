import { HeroSection } from "@/components/HeroSection/HeroSection";
import TopMovies from "@/components/TopMovies/TopMovies";
import BenefitsSection from "./Benefit";
import ImageGallery from "./ImageGallery";
import FAQSection from "./FAQ";
// import CategoriesSection from "./Categories";
// import FeaturedProducts from "./Featured";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      {/* <CategoriesSection /> */}
      {/* <FeaturedProducts/> */}
      <BenefitsSection/>
      <ImageGallery />
      <FAQSection/>
      <TopMovies />
      
    </div>
  );
}
