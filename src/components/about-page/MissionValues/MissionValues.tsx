import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MissionValues.module.css";
import Img1 from "../../../../public/images/mv1.jpg";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Direction from "../../../../public/icons/direction.svg";

const data = [
  {
    id: 1,
    title: "Championing Local Producers",
    copy: "We partner with beekeepers and honey makers who prioritize quality and ethical practices, ensuring that every jar comes from a trusted source.",
  },
  {
    id: 2,
    title: "Sustainability and Bee Health",
    copy: "We work exclusively with producers who practice sustainable beekeeping, promoting the health of pollinators and ecosystems.",
  },
  {
    id: 3,
    title: "Celebrating Variety",
    copy: "From raw wildflower honey to artisanal infused creations, we curate a wide range of flavors to suit every palate.",
  },
];

const MissionValues = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <Direction className={styles.icon} />
            <div className={styles.heading}>Our Mission & Values</div>
            <p className={styles.copyii}>
              By supporting our marketplace, you’re not just buying honey—you’re
              helping to sustain small businesses, protect bee populations, and
              preserve the art of honey making.
            </p>
            <div className={styles.mapContainer}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.copy}>{x.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              {/* <Image src={Img1} alt='' fill className={styles.img} /> */}
              <ParallaxImage
                src={Img1}
                alt='Parallax background'
                borderRadius='borderRadius'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default MissionValues;
