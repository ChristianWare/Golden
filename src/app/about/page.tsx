import AboutHero from "@/components/about-page/AboutHero/AboutHero";
import Art from "@/components/about-page/Art/Art";
import Fundamentals from "@/components/about-page/Fundamentals/Fundamentals";
import MissionValues from "@/components/about-page/MissionValues/MissionValues";
import ProductPreviewSection from "@/components/home-page/ProductPreviewSection/ProductPreviewSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionValues />
      <Fundamentals />
      <Art />
      <ProductPreviewSection />
    </main>
  );
}
