"use client";

import styles from "./ProductPreviewSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/about.jpg";
import Img2 from "../../../../public/images/aboutiii.jpg";
import Img3 from "../../../../public/images/contactiii.jpeg";
import { useState } from "react";

const data = [
  {
    id: 3,
    animation: Img1,
    title: "Our Award Winning Tonics",
    desc: "Best soft drink innovation 2025",
  },
  {
    id: 1,
    animation: Img2,
    title: "Alchol Free Flammarion",
    desc: "New: Book from the founder of JNPR",
  },
  {
    id: 2,
    animation: Img3,
    title: "RHHM No. 1",
    desc: "Discover our new alcohol-free spirit",
  },

];

export default function ProductPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {data.map((x, index) => (
              <div
                key={index}
                className={
                  activeIndex === index
                    ? `${styles.dataBox} ${styles.active}`
                    : styles.dataBox
                }
                onClick={() => setActiveIndex(index)}
              >
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={data[activeIndex].animation}
                alt=''
                title=''
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
