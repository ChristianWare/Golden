/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./ProductMedia.module.css";
import WixImage from "@/components/shared/WixImage";
import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Arrow from "../../../../../public/icons/leftArrow.svg";

interface ProductMediaProps {
  media: products.MediaItem[] | undefined;
}

export default function ProductMedia({ media }: ProductMediaProps) {
  // Filter out the first image from the media array
  const filteredMedia = media ? media.slice(1) : [];

  const [selectedMedia, setSelectedMedia] = useState<
    products.MediaItem | undefined
  >(filteredMedia.length > 0 ? filteredMedia[0] : undefined);

  useEffect(() => {
    if (filteredMedia.length) {
      setSelectedMedia(filteredMedia[0]);
    }
  }, [media]);

  if (!filteredMedia.length) return null;

  const handleNext = () => {
    if (!selectedMedia || !filteredMedia.length) return;
    const currentIndex = filteredMedia.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setSelectedMedia(filteredMedia[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedMedia || !filteredMedia.length) return;
    const currentIndex = filteredMedia.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const previousIndex =
      (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedMedia(filteredMedia[previousIndex]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const selectedImage = selectedMedia?.image;
  const selectedVideo = selectedMedia?.video?.files?.[0];

  return (
    <div {...swipeHandlers} className={styles.container}>
      {/* Display the selected media (image or video) */}
      <div className={styles.imgContainer}>
        {selectedImage?.url ? (
          <WixImage
            mediaIdentifier={selectedImage.url}
            alt={selectedImage.altText || "Product Image"}
            // scaletofill={false}
            width={900}
            height={900}
            className={styles.img}
          />
        ) : selectedVideo?.url ? (
          <video autoPlay loop controls className={styles.video}>
            <source
              src={selectedVideo.url}
              type={`video/${selectedVideo.format}`}
            />
          </video>
        ) : null}

        <div className={styles.circleContainer}>
          {filteredMedia.map((_, index) => (
            <span
              key={index}
              className={`${styles.circle} ${
                filteredMedia[index]._id === selectedMedia?._id
                  ? styles.activeCircle
                  : ""
              }`}
            />
          ))}
        </div>
        <div className={styles.arrowsContainer}>
          <button
            className={`${styles.arrowButton} ${styles.leftArrow}`}
            onClick={handlePrevious}
          >
            <Arrow className={styles.arrow} />
          </button>
          <button
            className={`${styles.arrowButton} ${styles.rightArrow}`}
            onClick={handleNext}
          >
            <Arrow className={`${styles.arrow} ${styles.arrowReverse}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
