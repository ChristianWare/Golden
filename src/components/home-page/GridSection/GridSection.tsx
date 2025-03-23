import styles from "./GridSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const GridSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              We know the latest buzz from the biggest beehives.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.boxContainer}>
              <div className={styles.topContainer}>
                <div className={styles.blend}>
                  <h3 className={styles.headingii}>About Us</h3>
                  <p className={styles.copyii}>
                    ~ Learn more about our history here ~
                  </p>
                </div>
              </div>
              <div className={styles.box1}></div>
              <div className={styles.box4}>
                <h5 className={styles.smallHeading}>Whipped Honey</h5>
              </div>
              <div className={styles.box2}></div>
              <div className={styles.box3}>
                <h5 className={styles.smallHeading}>Manuka Honey</h5>
              </div>

              <div className={styles.box5}></div>
            </div>
            <div className={styles.boxContainer2}>
              <div className={styles.box1B}></div>
              <div className={styles.box2B}>
                <h5 className={styles.smallHeadingDark}>Pollen</h5>
              </div>
              <div className={styles.box3B}>
                <h5 className={styles.beeswax}>Beeswax</h5>
              </div>
              <div className={styles.box4B}>
                <h5 className={styles.smallHeadingDark}>Nectar</h5>
              </div>
              <div className={styles.box5B}></div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GridSection;
