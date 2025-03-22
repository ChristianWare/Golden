import styles from "./Spotlight.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Quote from "../../../../public/icons/quote.svg";

const Spotlight = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <Quote className={styles.icon} />
          </div>
          <p className={styles.heading}>
            Every jar of honey on our platform is carefully curated with a focus
            on quality, sustainability, and authenticity.
          </p>
          <div className={styles.nameContainer}>
            <h4 className={styles.name}>BRAD McIntosh</h4>
            <p className={styles.title}>Founder & CEO of Golden Drips</p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Spotlight;
