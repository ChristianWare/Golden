import styles from "./ContactSection.module.css";
import Link from "next/link"; 
import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Want to get in touch? <br /> Drop us a line
          </h2>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
          <p className={styles.copy}>
            Need customer service help?{" "}
            <Link href='/contact' className={styles.span}>
              click here
            </Link>
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactSection;
