import AdditionalInfo from "@/components/AdditionalInfo";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
<div className="flex overflow-hidden flex-col z-10
      {/* 
<div className="flex flex-col z-10 bg-white">
      <ServicesSection />
      <ProcessSection />
      <Footer />
      </div> */}

      <AdditionalInfo />
</div>
    </div>
  );
}