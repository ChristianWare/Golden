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
        <div className={styles.top}>
          <p className={styles.price}>{getFormattedPrice(product)}</p>
          <h3 className={styles.productName}>{product.name}</h3>
          <span className={styles.model}>{product.category}</span>
        </div>
        <div className={styles.bottom}>
          <WixImage
            mediaIdentifier={mainImage?.url}
            alt={mainImage?.altText}
            width={300}
            height={200}
            scaletofill={true}
            className={styles.img}
          />
          {/* <div className={styles.details}>
            <div className={styles.left}>
              <div className={styles.strikeThrough}>$4,250.00 USD</div>
              <div className={styles.price}>
                {product.stock > 0 ? (
                  <>${product.price}</>
                ) : (
                  <span className={styles.outofStock}>Out of Stock</span>
                )}
              </div>
            </div>
          </div> */}
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
