"use client";

// import { ReactLenis } from "@studio-freight/react-lenis";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import styles from "./ParallaxArea.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Img1 from "../../../../public/images/hero.jpg";


export default function ParallaxArea() {
  return (
    <section className={styles.container}>
      <ParallaxImage src={Img1} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              Finally, something alcohol-free that tastes good
            </h2>
            <p className={styles.copy}>
              Our mission since 2020? <br /> To offer festive cocktails, with
              little or no sugar, that wont frustrate or bore, and above all,
              allow you to share good times with your loved ones, no matter
              whats in the glass, as long as the taste is there.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
