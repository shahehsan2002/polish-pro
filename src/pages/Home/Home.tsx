import { HeroSection } from "@/components/HeroSection/HeroSection";
import BenefitsSection from "./Benefit";
import ImageGallery from "./ImageGallery";
import FAQSection from "./FAQ";
// import FeaturedProducts from "./Featured";
import ReviewSection from "./ReviewSection";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      {/* <FeaturedProducts /> */}
      <BenefitsSection />
      <ReviewSection />
      <ImageGallery />
      <FAQSection />
    </div>
  );
}
