"use client";

import styles from "./ParallaxArea.module.css";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Img1 from "../../../../public/images/hero.jpg";
import Bee from "../../../../public/icons/bee2.svg";

export default function ParallaxArea() {
  return (
    <section className={styles.container}>
      <ParallaxImage src={Img1} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <Bee className={styles.icon} />
            <h2 className={styles.heading}>
              Finally, a sweet indulgence that truly delights!
            </h2>
            <p className={styles.copy}>
              Our mission since 2020? <br /> Golden Drips Honey has
              been on a mission to provide pure, natural honey that never feels
              dull or overdone—and that’s perfect for sharing with the people
              who matter most. Whether it’s a drizzle in your tea or a splash in
              a festive mocktail, as long as the flavor shines through, the
              moment is worth celebrating.
            </p>
            <Bee className={styles.icon2} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
