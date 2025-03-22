import styles from "./Footer.module.css";
import Arrow from "../../../../public/icons/arrow.svg";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1,
    title: "E-Shop",
    options: [
      {
        id: 1.1,
        option: "Option 1",
      },
      {
        id: 1.2,
        option: "Option 2",
      },
      {
        id: 1.3,
        option: "Option 3",
      },
      {
        id: 1.4,
        option: "Option 4",
      },
      {
        id: 1.5,
        option: "Option 5",
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

export default function Footer() {
  return (
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
            <p>I accept the privacy policy</p>
          </div>
          <div className={styles.right}>data here</div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
