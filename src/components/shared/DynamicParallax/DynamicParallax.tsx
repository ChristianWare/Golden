import { StaticImageData } from "next/image";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import styles from "./DynamicParallax.module.css";

interface Props {
  src: string | StaticImageData;
  alt?: string;
}

export default function DynamicParallax({
  src,
  alt = "Parallax background",
}: Props) {
  return (
    <section className={styles.container}>
      <ParallaxImage src={src} alt={alt} />
      <div className={styles.imgOverlay} />
    </section>
  );
}
