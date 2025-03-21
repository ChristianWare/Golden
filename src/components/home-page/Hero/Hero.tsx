// import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import RotatingText from "../RotatingText/RotatingText";

export default function Hero() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <div className={styles.top}>
          <RotatingText text='Live mas • Live mas • Live mas • Live mas • Live mas • Live mas •' />
          <span className={styles.span}>French non-alcoholic spirits</span>
          <h1 className={styles.heading}>the aperitif reinvented</h1>
        </div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
