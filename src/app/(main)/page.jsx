// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

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
