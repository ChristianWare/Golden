import styles from "./Footer.module.css";
import Arrow from "../../../../public/icons/arrow.svg";
import LayoutWrapper from "../LayoutWrapper";
import RotatingText from "@/components/home-page/RotatingText/RotatingText";

const data = [
  {
    id: 1,
    title: "E-Shop",
    options: [
      {
        id: 1.1,
        option: "JNPR range",
      },
      {
        id: 1.2,
        option: "Boxes",
      },
      {
        id: 1.3,
        option: "Sugar-free selection",
      },
      {
        id: 1.4,
        option: "Accessories & tonics",
      },
      {
        id: 1.5,
        option: "Recipe booklets",
      },
    ],
  },
  {
    id: 2,
    title: "Learn More",
    options: [
      {
        id: 2.1,
        option: "FAQ",
      },
      {
        id: 2.2,
        option: "Cocktails",
      },
      {
        id: 2.3,
        option: "History",
      },
      {
        id: 2.4,
        option: "Blog",
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    options: [
      {
        id: 3.1,
        option: "hello@jnprspirits.com",
      },
      {
        id: 3.2,
        option: "Professionals",
      },
      {
        id: 3.3,
        option: "My account",
      },
      {
        id: 3.4,
        option: "Join the team",
      },
    ],
  },
];

const data2 = [
  {
    id: 4,
    title: "Privacy Policy",
  },
  {
    id: 5,
    title: "General Conditions of Sale",
  },
  {
    id: 6,
    title: "Cookies",
  },
  {
    id: 7,
    title: "Legal Notices",
  },
];

export default function Footer() {
  return (
    <>
      <h1 className={styles.headingOne}>Honey reinvented</h1>
      <footer className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <h3 className={styles.heading}>
                We promise to send you cocktail recipes that wont get you drunk.
              </h3>
              <p className={styles.copy}>
                A surprise for your first order by subscribing to the newsletter
              </p>
              <div className={styles.email}>
                <span className={styles.span}>Email</span>
                <Arrow className={styles.icon} />
              </div>
              <p className={styles.privacy}>I accept the privacy policy</p>
            </div>
            <div className={styles.right}>
              {data.map((x) => (
                <div className={styles.optionSection} key={x.id}>
                  <div className={styles.title}>{x.title}</div>
                  <ul className={styles.optionList}>
                    {x.options.map((y) => (
                      <li key={y.id} className={styles.option}>
                        {y.option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.data2Container}>
              {data2.map((x) => (
                <p key={x.id} className={styles.option}>
                  {x.title}
                </p>
              ))}
            </div>
            <RotatingText text='Honey • Honey • Honey • Honey • Honey • Honey •' />
          </div>
        </LayoutWrapper>
      </footer>
    </>
  );
}
