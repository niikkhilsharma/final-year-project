import Footer from "@/components/footer/footer";
import HeroPage from "@/components/hero-page";
import HeroPageBanner from "@/components/hero-page-banner";
import Navbar from "@/components/navbar";
import TrustedBanner from "@/components/trusted-banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPageBanner />
      <HeroPage />
      <TrustedBanner />
      <Footer />
    </div>
  );
}
