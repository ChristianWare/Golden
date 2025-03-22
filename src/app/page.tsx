import Hero from "@/components/home-page/Hero/Hero";
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
    </main>
  );
}
