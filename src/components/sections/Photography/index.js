import ImageGallery from "react-image-gallery";

import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

import "./index.css";

const images = [
  {
    original: photo1,
  },
  {
    original: photo2,
  },
  {
    original: photo3,
  },
  {
    original: photo4,
  },
  {
    original: photo5,
  },
  {
    original: photo6,
  },
  {
    original: photo7,
  },
];

export const PhotographySection = () => {
  return (
    <section className="photo-section">
      <span className="blurb">
        <p className="blurb-title">
          Besides for coding, I also love guitar, traveling, photography, and
          people.
        </p>
        <p className="blurb-subtitle">
          Here's some smoke photography I've shot, cuz I think it looks cool
        </p>
        ᵔ ᵕ ᵔ
      </span>

      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        autoPlay={true}
      />
    </section>
  );
};
