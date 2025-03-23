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
              Finally, something alcohol-free that tastes good
            </h2>
            <p className={styles.copy}>
              Our mission since 2020? <br /> To offer festive cocktails, with
              little or no sugar, that wont frustrate or bore, and above all,
              allow you to share good times with your loved ones, no matter
              whats in the glass, as long as the taste is there.
            </p>
            <Bee className={styles.icon2} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
