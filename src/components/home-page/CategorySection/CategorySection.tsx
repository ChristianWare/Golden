import styles from "./CategorySection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollections } from "@/wix-api/collections";
import Link from "next/link";
// import Image from "next/image";
import Arrow from "../../../../public/icons/arrow.svg";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Button from "@/components/shared/Button/Button";

export default async function CategorySection() {
  const wixClient = await getWixServerClient();

  const collections = await getCollections(wixClient);
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Types of Honey We Offer</h2>
          </div>
          <div className={styles.bottom}>
            {collections.map((collection) => (
              <Link href={`/shop/${collection.slug}`} key={collection._id}>
                <div className={styles.imgContainer}>
                  <div className={styles.imgOverlay}></div>
                  {collection.bannerImage ? (
                    <div className={styles.imgContainer}>
                      <ParallaxImage
                        src={collection.bannerImage}
                        alt='Parallax background'
                        borderRadius='borderRadius'
                      />
                    </div>
                  ) : (
                    <div className={styles.noImage}>No Image Available</div>
                  )}
                  <div className={styles.collectionNameArrowBox}>
                    <span className={styles.collectionName}>
                      {collection.name}
                    </span>
                    <Arrow className={styles.arrow} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.bottom2}>
            <p className={styles.copy}>
              Creating delicious drinks is no easy task. Without refined sugars
              or artificial additives, every ingredient has to shine—and honey
              brings that natural balance. With Golden Drips Honey, you don’t
              need alcohol to craft something memorable. Our honey adds depth,
              richness, and a smooth finish that rivals even the most complex
              cocktails. Full of character, naturally sweet, and endlessly
              versatile—there’s nothing missing, only more to enjoy.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='brown' href='/' text='Shop All' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
