"use client";

import styles from "./ProductDetails.module.css";
import { products } from "@wix/stores";
import { useState } from "react";
import { checkInStock, findVariant, formatCurrency } from "@/lib/utils";
import ProductMedia from "../ProductMedia/ProductMedia";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductOptions from "../ProductOptions/ProductOptions";
import RotatingText from "@/components/home-page/RotatingText/RotatingText";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import DynamicParallax from "@/components/shared/DynamicParallax/DynamicParallax";
// import DynamicParallax from "@/components/shared/DynamicParallax/DynamicParallax";
// import AddToCartButton from "@/components/shared/AddToCartButton/AddToCartButton";

interface ProductDetailsProps {
  product: products.Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(
    product.productOptions
      ?.map((option) => ({
        [option.name || ""]: option.choices?.[0].description || "",
      }))
      ?.reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {}
  );

  // Filter media based on selected options
  const getFilteredMedia = () => {
    const selectedOptionsMedia = product.productOptions?.flatMap((option) => {
      const selectedChoice = option.choices?.find(
        (choice) => choice.description === selectedOptions[option.name || ""]
      );
      return selectedChoice?.media?.items ?? [];
    });

    return !!selectedOptionsMedia?.length
      ? selectedOptionsMedia // Filtered media for selected options
      : product.media?.items; // Fallback to all media if no specific media
  };

  const selectedMedia = getFilteredMedia();

  const selectedVariant = findVariant(product, selectedOptions);

  const inStock = checkInStock(product, selectedOptions);

  const availableQuantity = Math.min(product.stock?.quantity || 10, 10) ?? 1;

  const availableQuantityExceeded =
    !!availableQuantity && quantity > availableQuantity;

  // const increaseQuantity = () => {
  //   if (quantity < availableQuantity) {
  //     setQuantity(quantity + 1);
  //   }
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  console.log(product);

  return (
    <>
      <div className={styles.top}>
        <RotatingText text='Honey • Honey • Honey • Honey • Honey • Honey •' />
        <span className={styles.price}>{getFormattedPrice(product)}</span>
        <h1 className={styles.heading}>{product.name}</h1>
        <DynamicParallax
          src={
            product.media?.items
              ? product.media.items[product.media.items.length - 1]?.image
                  ?.url || ""
              : ""
          }
        />{" "}
      </div>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.productMediaContainer}>
                <ProductMedia media={selectedMedia} />
              </div>
            </div>
            <div className={styles.right}>
              <h2 className={styles.productName}>{product.name}</h2>
              <ProductPrice
                product={product}
                selectedVariant={selectedVariant}
              />

              {!!product.additionalInfoSections?.length && (
                <>
                  <p
                    className={styles.readMore}
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "- Show Less" : "+ Read More"}
                  </p>
                  <div
                    className={`${styles.infoContainer} ${
                      showMore ? styles.show : ""
                    }`}
                  >
                    {product.additionalInfoSections.map((section) => (
                      <div key={section.title}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: section.description || "",
                          }}
                          className={styles.description}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              <ProductOptions
                product={product}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />

              {inStock ? (
                <>
                  {!!availableQuantity &&
                    (availableQuantityExceeded || availableQuantity < 10) && (
                      <span className={styles.stockWarning}>
                        Only {availableQuantity} left in stock
                      </span>
                    )}
                  <div className={styles.quantityInfoBox}>
                    <div className={styles.quantityInfo}>
                      {/* <div className={styles.quantitySelector}>
                  <button
                    onClick={decreaseQuantity}
                    className={styles.quantityButton}
                  >
                    -
                  </button>
                  <span className={styles.quantityDisplay}>{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className={styles.quantityButton}
                  >
                    +
                  </button>
                </div> */}
                      {/* {!!availableQuantity &&
                  (availableQuantityExceeded || availableQuantity < 10) && (
                    <span className={styles.stockWarning}>
                      Only {availableQuantity} left in stock
                    </span>
                  )} */}
                    </div>
                    {/* <div className={styles.btnContainer}>
                <AddToCartButton
                  product={product}
                  selectedOptions={selectedOptions}
                  quantity={quantity}
                />
              </div> */}
                  </div>

                  {product.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className={styles.description}
                    />
                  )}
                </>
              ) : (
                <button className={styles.outOfStockButton}>
                  Out of stock
                </button>
              )}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </>
  );
}

function getFormattedPrice(product?: products.Product) {
  const minPrice = product?.priceRange?.minValue;
  const maxPrice = product?.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `${formatCurrency(
      minPrice,
      product.priceData?.currency
    )} -  ${formatCurrency(maxPrice, product.priceData?.currency)}`;
  } else {
    return (
      product?.priceData?.formatted?.discountedPrice ||
      product?.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
