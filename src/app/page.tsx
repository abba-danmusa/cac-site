import AdditionalInfo from "@/components/AdditionalInfo";
import CACRegistrationInfo from "@/components/CACRegistrationInfo";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <HeroSection />
      <div className="flex flex-col overflow-hidden z-10 bg-white">
        <ServicesSection />
      </div>
        <CACRegistrationInfo />
      <div className="flex flex-col overflow-hidden z-10 bg-white">
        <AdditionalInfo />
      </div>
    </div>
  );
}