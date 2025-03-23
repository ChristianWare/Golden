"use client";

import styles from "./RotatingText.module.css";
import { FC } from "react";
import Bee from "../../../../public/icons/bee.svg";

interface RotatingTextProps {
  text: string;
  showArrow?: boolean;
  color?: string;
  iconColor?: string;
}

const RotatingText: FC<RotatingTextProps> = ({
  text,
  color = "",
  iconColor = "",
}) => {
  return (
    <div className={styles.container}>
      <Bee className={`${styles.icon} ${styles[iconColor]}`} />
      <svg className={styles.svg} viewBox='0 0 100 100'>
        <defs>
          <path
            id='circle'
            d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text fontSize='7.5'>
          <textPath
            className={`${styles.textPath} ${styles[color]}`}
            xlinkHref='#circle'
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingText;
