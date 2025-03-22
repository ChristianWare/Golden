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
              Making good cocktails is a real challenge. Without alcohol, the
              balance must be even more carefully crafted so that the alcohol
              doesnt mask certain deficiencies or add whats called a kick, the
              strength to enhance everything. The creations you can make with
              JNPR have nothing to envy their alcoholic counterparts: length in
              the mouth, consistency, originality...
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
