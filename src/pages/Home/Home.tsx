import { HeroSection } from "@/components/HeroSection/HeroSection";
import BenefitsSection from "./Benefit";
import ImageGallery from "./ImageGallery";
import FAQSection from "./FAQ";
import CategoriesSection from "./Categories";
import FeaturedProducts from "./Featured";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts/>
      <BenefitsSection/>
      <ImageGallery />
      <FAQSection/>
      
      
    </div>
  );
}
