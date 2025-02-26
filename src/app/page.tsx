import AdditionalInfo from "@/components/AdditionalInfo";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
<div className="flex overflow-hidden flex-col z-10">
  

      <AdditionalInfo />
</div>
    </div>
  );
}