import FeaturePage from "@/components/Feature";
import HappyTails from "@/components/HappyTails";
import BannerPage from "@/components/Hero";
import WhyChooseAdoption from "@/components/WhyChooseAdoption";

export default function Home() {
  return (
    <>
      <BannerPage />
      <FeaturePage />
      <WhyChooseAdoption />
      <HappyTails />
    </>
  );
}
