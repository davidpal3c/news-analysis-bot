import styles from "./page.module.css";
import Header from "./components/header/view";
import Link from "next/link";
import NewsCard from "./components/NewsCard";

// Hardcodeed data for news cards since we have not implemented the backend yet
const News = [
  { title: "News 1", image: "/placeholder-image.jpg" },
  { title: "News 2", image: "/placeholder-image.jpg" },
  { title: "News 3", image: "/placeholder-image.jpg" },
  { title: "News 4", image: "/placeholder-image.jpg" },
  { title: "News 5", image: "/placeholder-image.jpg" },
  { title: "News 6", image: "/placeholder-image.jpg" },
];

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.bodyDiv}>
        <div className={styles.navBar}>
          <Link className={styles.active} href="">
            Home
          </Link>
          <Link href="/search">Search</Link>
        </div>
        <h1 className={styles.bodyTitle}>Today&apos;s Hottest News</h1>
      </div>
      <div className={styles.cardDiv}>
        {News.map((newsItem, index) => (
          <div key={index}>
            <NewsCard title={newsItem.title} image={newsItem.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
