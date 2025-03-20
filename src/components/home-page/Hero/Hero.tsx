import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <span className={styles.span}>French non-alcoholic spirits</span>
            <h1 className={styles.heading}>the aperitif reinvented</h1>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
