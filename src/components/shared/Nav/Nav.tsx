import styles from "./Nav.module.css";
import NavAnnouncement from "./NavAnnouncement/NavAnnouncement";
import NavLinks from "./NavLinks/NavLinks";
import NavbarIcons from "./NavbarIcons/NavbarIcons";

export function Nav() {
  return (
    <header className={styles.header}>
      <NavAnnouncement />
      <div className={styles.navBar}>
        <NavLinks />
        <NavbarIcons />
      </div>
    </header>
  );
}
