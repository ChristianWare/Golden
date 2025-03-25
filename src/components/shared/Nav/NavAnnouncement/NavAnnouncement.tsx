"use client";
import styles from "./NavAnnouncement.module.css";

export default function NavAnnouncement() {
  return (
    <div className={styles.container}>
      <span className={styles.copy}>
        guaranteed shipping within 48 working hours 🍸 more than 100 recipes to
        discover
        {/* <ScrollHorizontalText
          text='guaranteed shipping within 48 working hours 🍸 more than 100 recipes to
        discover'
        /> */}
      </span>
    </div>
  );
}
