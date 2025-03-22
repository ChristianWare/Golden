import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import GridSection from "@/components/home-page/GridSection/GridSection";
import Hero from "@/components/home-page/Hero/Hero";
import ProductPreviewSection from "@/components/home-page/ProductPreviewSection/ProductPreviewSection";
import ValueProp from "@/components/home-page/ValueProp/ValueProp";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
import ParallaxArea from "@/components/shared/ParallaxArea/ParallaxArea";

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxArea />
      <DynamicProductCollection
        title='Our Best Sellers'
        category='best-sellers'
      />
      <ValueProp />
      <ProductPreviewSection />
      <CategorySection />
      <GridSection />
    </main>
  );
}
