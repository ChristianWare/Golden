import RotatingText from "@/components/home-page/RotatingText/RotatingText";
import styles from "./AboutHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const data = [
  {
    id: 1,
    title: "The Story",
  },
  {
    id: 2,
    title: "The Honey Project",
  },
  {
    id: 3,
    title: "The Art of Distilation",
  },
];

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <RotatingText
            text='Honey • Honey • Honey • Honey • Honey • Honey •'
            color='lightBlue'
            iconColor='lightBlue'
          />
          <div className={styles.dataBox}>
            {data.map((x) => (
              <span key={x.id} className={styles.span}>
                {x.title}
              </span>
            ))}
          </div>
          <h1 className={styles.heading}>Our Story</h1>
          <LayoutWrapper>
            <p className={styles.copy}>
              During a trip to the United States, Valérie, the founder,
              experienced a much more varied range of drinks, with subtle
              flavors, natural ingredients, and properties that make them true
              everyday allies. The first thoughts about JNPR then germinated.
              <br />
              <br />
              Through her research, she discovered that during the 17th century,
              distilled juniper berry and other plants and spices such as
              coriander seed were highly sought after, renowned in particular
              for their medicinal properties.
              <br />
              <br />
              She met Flavio Angiolillo, a renowned bartender, and together,
              they reflected on the best way to perpetuate this tradition by
              setting themselves an additional challenge: maintaining excellent
              mixology properties, even without alcohol. After months of
              reading, research, testing, and meetings, JNPR was born.
            </p>
          </LayoutWrapper>
        </div>
      </div>
    </section>
  );
}
