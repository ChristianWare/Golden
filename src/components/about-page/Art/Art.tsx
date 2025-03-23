import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Art.module.css";
import Flower from "../../../../public/icons/flower.svg";

export default function Art() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            The Art of
            <br />
            <span className={styles.span}>Distillation</span>
          </h2>
          <Flower className={styles.icon} />
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            Our alcohol-free spirits are the result of meticulous work. In order
            to impart a length in the mouth and aromatic strength worthy of
            classic spirits, emphasis has been placed in research on ancestral
            techniques, particularly that of distillation. The latter, by
            allowing high heating, allows the extraction of the aromas of all
            botanicals and spices, even if no alcohol is used in the
            manufacturing process.
            <br />
            <br />
            For the JNPR collection, the use of a copper Charentais still allows
            for distillation in small batches.
            <br />
            <br />
            To obtain the desired adult taste, 2 to 5 times more spices than for
            a classic spirit are used, thus strengthening the aromatic
            intensity, even without alcohol.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
