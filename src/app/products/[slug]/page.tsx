import { getProductBySlug } from "@/wix-api/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails/ProductDetails";
import { Metadata } from "next";
import { getWixServerClient } from "@/lib/wix-client.server";
// import LayoutWrapper from "@/components/shared/LayoutWrapper";
// import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
// import SignUp from "@/components/shared/SignUp/SignUp";
// import Footer from "@/components/shared/Footer/Footer";
import ParallaxArea from "@/components/shared/ParallaxArea/ParallaxArea";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import ValueProp from "@/components/home-page/ValueProp/ValueProp";
import ReviewSection from "@/components/home-page/ReviewSection/ReviewSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const wixClient = await getWixServerClient();
  const product = await getProductBySlug(wixClient, slug);

  if (!product) notFound();

  const mainImage = product.media?.mainMedia?.image;

  return {
    title: product.name,
    description: "Get this product on flowshop",
    openGraph: {
      images: mainImage?.url
        ? [
            {
              url: mainImage.url,
              width: mainImage.width,
              height: mainImage.height,
              alt: mainImage.altText || "",
            },
          ]
        : undefined,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const wixClient = await getWixServerClient();
  const product = await getProductBySlug(wixClient, slug);

  if (!product?._id) notFound();

  return (
    <main>
      <ProductDetails product={product} />
      <ParallaxArea />
      <ValueProp />
      <ReviewSection />
      <RelatedProducts productId={product._id} />
    </main>
  );
}
