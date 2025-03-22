"use client";

import styles from "./ProductPreviewSection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/about.jpg";
import Img2 from "../../../../public/images/aboutiii.jpg";
import Img3 from "../../../../public/images/contactii.jpg";
import Img4 from "../../../../public/images/contactiii.jpeg";
import { useState } from "react";

const data = [
  {
    id: 3,
    animation: Img1,
    title: "Maximize your revenue potential",
    desc: "Drive more sales with optimized user experiences, fast load times, and conversion-focused design that turns visitors into loyal customers.",
  },
  {
    id: 1,
    animation: Img2,
    title: "Optimized for mobile-first shoppers (70% of e-commerce traffic)",
    desc: "We build websites that help your online store reach new heights, combining speed, scalability, and style to make your business stand out.",
  },
  {
    id: 2,
    animation: Img3,
    title: "PCI-compliant payment gateways integrated seamlessly",
    desc: "Simplify your workflow with seamless order processing, real-time updates, and automated confirmations to keep your customers coming back.",
  },
  {
    id: 4,
    animation: Img4,
    title: "SEO structures built to rank product pages, not just blogs",
    desc: "Easily manage your store from anywhere with user-friendly tools that give you control over products, sales, and analytics—all in one place.",
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
