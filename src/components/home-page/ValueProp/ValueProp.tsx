import styles from "./ValueProp.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Arrow from "../../../../public/icons/arrow.svg";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "1.",
    copy: "Delicious honey options crafted for every lifestyle—from daily drizzlers to gourmet connoisseurs.",
  },
  {
    id: 2,
    title: "2.",
    copy: "We keep things simple—fresh, traceable honey delivered straight to your door with ease.",
  },
  {
    id: 3,
    title: "3.",
    copy: "From hive to home, our process ensures you enjoy golden goodness in every drop.",
  },
];


export default function ValueProp() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Pure and Simple <br /> Honey the Natural Way.{" "}
          </h2>
          <div className={styles.dataContainer}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <Arrow className={styles.icon} />
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <p className={styles.copy}>{x.copy}</p>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <Button href='/' text='Shop All Honey' btnType='brown' />
          </div>{" "}
        </div>
      </LayoutWrapper>
    </section>
  );
}
