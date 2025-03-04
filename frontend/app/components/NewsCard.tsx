import Image from "next/image";
import React from "react";
import styles from "../page.module.css";

interface NewsCardProps {
  title: string;
  image: string;
}

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={image}
        alt="News Image"
        width={250}
        height={250}
        className={styles.image}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
