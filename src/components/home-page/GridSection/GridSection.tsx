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
              <div className={styles.box1}>
                {/* <Image
                  src={Img1}
                  alt='Nacho fries'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                /> */}
              </div>
              <div className={styles.box4}>
                <h5 className={styles.quintero}>Whipped Honey</h5>
              </div>
              <div className={styles.box2}>
                {/* <Image
                  src={Img3}
                  alt='drone image 2'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                /> */}
              </div>
              <div className={styles.box3}>
                <h5>Manuka Honey</h5>
              </div>

              <div className={styles.box5}>
                {/* <Image
                  src={Img1}
                  alt='drone image 3'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                /> */}
              </div>
            </div>
            <div className={styles.boxContainer2}>
              <div className={styles.box1B}>
                {/* <Image
                  src={Img2}
                  alt='drone image 4'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                /> */}
              </div>
              <div className={styles.box2B}>
                <h5 className={styles.boulders}>Pollen</h5>
              </div>
              <div className={styles.box3B}>
                <h5 className={styles.beeswax}>Beeswax</h5>
              </div>
              <div className={styles.box4B}>
                <h5 className={styles.troon}>Nectar</h5>
              </div>
              <div className={styles.box5B}>
                {/* <Image
                  src={Img3}
                  alt='drone image 6'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GridSection;
