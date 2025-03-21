'use client'

import { useEffect, useState } from "react";
import styles from "./NavAnnouncement.module.css";

export default function NavAnnouncement() {
    const [showNav, setShowNav] = useState(true);


   useEffect(() => {
     let lastScrollY = window.scrollY;

     const handleScroll = () => {
       const currentScrollY = window.scrollY;

       if (currentScrollY > lastScrollY && currentScrollY > 100) {
         // Scrolling down and scrolled more than 100px
         setShowNav(false);
       } else {
         // Scrolling up
         setShowNav(true);
       }

       lastScrollY = currentScrollY;
     };

     // Throttle scroll events for performance
     let ticking = false;
     const optimizedHandleScroll = () => {
       if (!ticking) {
         window.requestAnimationFrame(() => {
           handleScroll();
           ticking = false;
         });
         ticking = true;
       }
     };

     window.addEventListener("scroll", optimizedHandleScroll);

     return () => {
       window.removeEventListener("scroll", optimizedHandleScroll);
     };
   }, []);
  return (
    // <div className={`${styles.container}`}>
    <div
      className={`${styles.container} ${showNav ? styles.show : styles.hide}`}
    >
      <span className={styles.copy}>
        guaranteed shipping within 48 working hours 🍸 more than 100 recipes to
        discover
      </span>
    </div>
  );
}
