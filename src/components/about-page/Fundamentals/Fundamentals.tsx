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
          <h2 className={styles.mainHeading}>The JNPR </h2>

          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              500 juniper plants have been replanted in Normandy since the start
              of the adventure
            </h2>
            <p className={styles.copy}>
              JNPR is a name that was chosen in reference to the juniper berry,
              which is the characteristic ingredient of Gin, and the products of
              the JNPR range.
              <br />
              60 first plants were planted in 2020, knowing that the shrubs take
              3 years to produce the first berries. The project grows with the
              brand and 500 new plants were planted in March 2023.
              <br />
              The project will not be self-sufficient at this stage. We ensure
              the quality and future supply of some of our berries. For our
              partners, the hedges that are thus created help to combat soil
              erosion and promote biodiversity.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
