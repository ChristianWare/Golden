// import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import RotatingText from "../RotatingText/RotatingText";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <RotatingText text='Honey • Honey • Honey • Honey • Honey • Honey •' />
          <span className={styles.span}>Golden Drips Honey Marketplace</span>
          <h1 className={styles.heading}>Honey reinvented</h1>
        </div>
      </div>
    </section>
  );
}
