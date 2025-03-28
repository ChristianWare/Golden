import styles from "./ProductCard.module.css";
import WixImage from "../WixImage";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { products } from "@wix/stores";
// import { Product } from "../../../../../types";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}

export default function ProductCard({ product }: Props) {
  const mainImage = product?.media?.mainMedia?.image;

  return (
    <article className={styles.container}>
      <Link href={`/products/${product?.slug}`} className={styles.link}>
        <div className={styles.bottom}>
          <WixImage
            mediaIdentifier={mainImage?.url}
            alt={mainImage?.altText}
            width={700}
            height={900}
            // aspect ration is crucial here...
            scaletofill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.top}>
          <p className={styles.price}>{getFormattedPrice(product)}</p>
          <h3 className={styles.productName}>{product.name}</h3>
          <span className={styles.model}>{product.category}</span>
        </div>
      </Link>
    </article>
  );
}

function getFormattedPrice(product?: products.Product) {
  const minPrice = product?.priceRange?.minValue;
  const maxPrice = product?.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product?.priceData?.formatted?.discountedPrice ||
      product?.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
