// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

import FeaturePage from "@/components/Feature";
import BannerPage from "@/components/Hero";

export default function Home() {
  return (
    <>
      <BannerPage />
      <FeaturePage />
    </>
  );
}
