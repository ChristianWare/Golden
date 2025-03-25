"use client";

import styles from "./ProductPreviewSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/about.jpg";
import Img2 from "../../../../public/images/aboutiii.jpg";
import Img3 from "../../../../public/images/contactiii.jpeg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    id: 3,
    animation: Img1,
    title: "Our Award-Winning Honey",
    desc: "Voted Best Natural Sweetener of 2025",
  },
  {
    id: 1,
    animation: Img2,
    title: "The Golden Story",
    desc: "New: A heartfelt book from the founder of Golden Drips",
  },
  {
    id: 2,
    animation: Img3,
    title: "Golden Reserve No. 1",
    desc: "Discover our latest small-batch, artisan honey blend",
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
            <AnimatePresence mode='wait'>
              <motion.div
                className={styles.imgContainer}
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={data[activeIndex].animation}
                  alt=''
                  title=''
                  className={styles.img}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
