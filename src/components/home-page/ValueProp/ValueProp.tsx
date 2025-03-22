import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ValueProp.module.css";
import Arrow from "../../../../public/icons/arrow.svg";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "1.",
    copy: "Tailored options for every honey business, from small-scale to large-scale operations.",
  },
  {
    id: 2,
    title: "2.",
    copy: "Effortless inventory management and traceability for your honey products.",
  },
  {
    id: 3,
    title: "3.",
    copy: "From hive to honey pot, we streamline your processes for maximum efficiency.",
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
