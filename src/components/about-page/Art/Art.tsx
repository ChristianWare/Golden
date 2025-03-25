import styles from "./Art.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Flower from "../../../../public/icons/flower.svg";

export default function Art() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            The Art of
            <br />
            <span className={styles.span}>Harvesting Honey</span>
          </h2>
          <Flower className={styles.icon} />
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            Our honey is the result of careful craftsmanship and deep respect
            for nature’s rhythms. To achieve the richness, depth, and complexity
            that define Golden Drips, we draw inspiration from age-old methods
            of harvesting and blending.
            <br />
            <br />
            Each batch is made with care—sourced from select hives and harvested
            in small quantities to preserve purity and flavor. Much like
            traditional artisans, we focus on technique and timing, allowing the
            natural properties of the honey to shine through without the need
            for added sugars or artificial ingredients.
            <br />
            <br />
            To deliver that smooth, layered taste in every jar, we rely on
            nature’s own complexity: a variety of floral sources, optimal
            harvesting times, and thoughtful blending—creating a honey that’s
            anything but ordinary.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
