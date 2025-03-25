import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import styles from "./Fundamentals.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Img1 from "../../../../public/images/unlock1.jpg";

export default function Fundamentals() {
  return (
    <section className={styles.container}>
      <ParallaxImage src={Img1} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.mainHeading}>Our Honey </h2>

          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              The name Golden Drips was inspired by the pure, golden streams of
              raw honey that flow straight from the hive—natures original
              sweetener and one of its most powerful gifts.
            </h2>
            <p className={styles.copy}>
              JNPR is a name that was chosen in reference to the juniper berry,
              which is the characteristic ingredient of Gin, and the products of
              the JNPR range.
              <br />
              <br />
              The first planting effort began in 2020 with 60 flowering shrubs,
              chosen to support pollinators and strengthen the surrounding
              ecosystem. These plants typically take a few seasons to fully
              bloom, but their impact starts right away—feeding bees, enriching
              the soil, and restoring balance to local biodiversity. In March
              2023, 500 more were added, and our commitment continues to grow
              with the brand.
              <br />
              <br />
              While we dont rely solely on our own crops for honey production,
              these efforts reflect our deeper mission: to protect the
              pollinators who make everything possible. For our local partners,
              these thriving hedgerows also help reduce soil erosion and promote
              a more sustainable future.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
