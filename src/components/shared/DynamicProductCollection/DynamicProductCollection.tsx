import styles from "./DynamicProductCollection.module.css";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Burst from "../../../../public/icons/bee2.svg";

interface Props {
  title: string;
  category: string;
  reverse?: string;
}

export default async function DynamicProductCollection({
  title,
  category,
}: // reverse = "",
Props) {
  const wixClient = await getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, `${category}`);
  if (!collection?._id) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>{title} </h2>{" "}
            {/* <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div> */}
            loading....
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  // Render skeletons if there are no products
  if (!featuredProducts.items.length) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>{title} </h2>{" "}
            {/* <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div> */}
            <p>No products to show</p>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>{title}</h2>
          <Burst className={styles.icon} />
        </div>
        <div className={styles.content}>
          {featuredProducts.items.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
