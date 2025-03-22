import styles from "./GridSectionInfo.module.css";

const data = [
  {
    id: 1,
    title: "Our Journey from Hive to Home",
    copy: "From our family-owned apiaries to your kitchen table, we bring you the purest honey, straight from the source.",
  },
  {
    id: 2,
    title: "A Family Tradition of Honey Making",
    copy: "For generations, our family has been dedicated to crafting the finest honey, passed down through the years.",
  },
  {
    id: 3,
    title: "Committed to Quality, Committed to Bees",
    copy: "We prioritize sustainable beekeeping practices to ensure the health of our bees and the quality of our honey.",
  },
  {
    id: 4,
    title: "The Story Behind the Sweetness",
    copy: "Discover the fascinating world of beekeeping and the journey of honey from the hive to your jar.",
  },
];

const GridSectionInfo = () => {
  return (
    <section className={styles.container}>
      {data.map((x) => (
        <div key={x.id} className={styles.card}>
          <h3 className={styles.title}>{x.title}</h3>
          <p className={styles.copy}>{x.copy}</p>
        </div>
      ))}
    </section>
  );
};
export default GridSectionInfo;
