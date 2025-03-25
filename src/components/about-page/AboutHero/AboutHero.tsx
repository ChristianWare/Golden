import RotatingText from "@/components/home-page/RotatingText/RotatingText";
import styles from "./AboutHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Lol from "../../../../public/icons/lol.svg";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <RotatingText
            text='Honey • Honey • Honey • Honey • Honey • Honey •'
            color='lightBlue'
            iconColor='blueIcon'
          />
          <div className={styles.dataBox}>
            {/* {data.map((x) => ( */}
            <span className={styles.span}>
              {/* {x.title} */}
              How did we get our start?
            </span>
            {/* ))} */}
          </div>
          <h1 className={styles.heading}>Funny Story</h1>
          <div className={styles.iconContainer}>
            <Lol className={styles.icon} />
          </div>
        </div>
        <LayoutWrapper>
          <p className={styles.copy}>
            During a trip through the American Southwest, Valérie, the founder
            of Golden Drips Honey, discovered a rich variety of natural
            sweeteners used in everything from home remedies to handcrafted
            recipes. What stood out most? Pure, unprocessed honey—full of
            character, subtle floral notes, and incredible versatility in
            everyday life. The first seeds of Golden Drips began to take root.
            <br />
            <br />
            Her research led her deep into the history of honey, tracing its
            roots back to ancient civilizations where it was prized not just for
            its taste, but also for its natural healing properties. From
            soothing teas to skin care remedies, honey was revered as nature’s
            golden gift.
            <br />
            <br />
            Inspired by this legacy, she began working closely with local
            beekeepers and natural food artisans to craft something truly
            special. After months of exploring flavor profiles, testing recipes,
            and learning from the best, Golden Drips Honey was born—a brand
            built on purity, purpose, and a passion for all things golden.
          </p>
        </LayoutWrapper>
      </div>
    </section>
  );
}
