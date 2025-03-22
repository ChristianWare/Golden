// import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ReviewSection.module.css";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Img1 from "../../../../public/images/review.jpg";
import Button from "@/components/shared/Button/Button";

export default function ReviewSection() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <ParallaxImage src={Img1} alt='Parallax background' />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>
            They talk about it better than we do.
          </h2>
          <h3 className={styles.review}>
            &ldquo;Too often the absence of alcohol is compensated by the
            addition of sugars to give more flavor, here there is no need.&quot;
          </h3>
          <div className={styles.btnContainer}>
            <Button btnType='blue' text='discover our products' href='/' />
          </div>
        </div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
