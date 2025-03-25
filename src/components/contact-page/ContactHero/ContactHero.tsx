import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactHero.module.css";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    heading: "Resellers",
    desc: "Wine merchants, delicatessens, concept stores... our network of resellers is expanding across France.",
    desc2:
      "We support you by providing sales materials such as recipe cards, postcards, presentation easels, and more.",
  },
  {
    id: 2,
    heading: "Bartenders, chefs & hoteliers",
    desc: "JNPR on your menu!",
    desc2:
      "We offer a wide range of recipes, from simple to more original, No & Low, to inspire you and perhaps even help you make cocktails.",
  },
  {
    id: 3,
    heading: "Events",
    desc: "JNPR at your events!",
    desc2:
      "For your guests who are looking to reduce their alcohol consumption, or because they don't drink alcohol.",
  },
];

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <span className={styles.span}>Contact Us</span>
          <h1 className={styles.heading}>JNPR for professionals</h1>
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
