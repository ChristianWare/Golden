import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactHero.module.css";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    heading: "Retail Partners",
    desc: "Specialty food shops, gift boutiques, farmers markets... our network of retail partners is growing across the country.",
    desc2:
      "We support our stockists with beautiful merchandising tools like tasting cards, display stands, sample jars, and more.",
  },
  {
    id: 2,
    heading: "Chefs, Bakers & Hospitality",
    desc: "Add Golden Drips to your menu!",
    desc2:
      "From sweet glazes to savory marinades, we offer a variety of recipe inspirations to help you make the most of our honey in your kitchen or establishment.",
  },
  {
    id: 3,
    heading: "Events & Gifting",
    desc: "Golden Drips at your next event!",
    desc2:
      "Perfect for weddings, corporate gifts, or seasonal gatherings—our honey adds a thoughtful, delicious touch to every occasion.",
  },
];


export default function ContactHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <span className={styles.span}>Contact Us</span>
          <h1 className={styles.heading}>Honey for professionals</h1>
          <p className={styles.copy}>
            Thank you for your interest in our brand and product lines. Our team
            is available to answer your questions!
          </p>
          <div className={styles.btnContainer}>
            <Button btnType='yellow' text='contact us' href='/contact' />
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div className={styles.card} key={x.id}>
              <h3 className={styles.title}>{x.heading}</h3>
              <p className={styles.desc}>{x.desc}</p>
              <p className={styles.desc}>{x.desc2}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
