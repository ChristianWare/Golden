import Hero from "@/components/home-page/Hero/Hero";
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
    </main>
  );
}
