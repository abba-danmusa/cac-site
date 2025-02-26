import AdditionalInfo from "@/components/AdditionalInfo";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
      {/* <div className="flex flex-col z-10 bg-white">
      <ServicesSection />
      <ProcessSection />
      <Footer />
      </div> */}
      <AdditionalInfo />
    </div>
  );
}