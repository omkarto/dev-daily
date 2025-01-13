import React, { useState } from "react";
import "./imageSlide.css";
import { Helmet } from "react-helmet";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Featured Images",
            image: slides.map((slide) => ({
              "@type": "ImageObject",
              url: slide.url,
              name: slide.title,
            })),
          })}
        </script>
      </Helmet>
      <div className="slider-container">


      <section className="image-slider-container">
        <h2 className="slider-title">Featured Images</h2>
        <div className="image-slider" role="region" aria-label="Image Slider">
          <button
            onClick={goToPrevious}
            className="slider-arrow left-arrow"
            aria-label="Previous image"
          >
            ←
          </button>
          <figure>
            <img
              src={slides[currentIndex].url}
              alt={`${slides[currentIndex].title} - Featured image ${
                currentIndex + 1
              } of ${slides.length}`}
              loading="lazy"
            />
            <figcaption>{slides[currentIndex].title}</figcaption>
          </figure>
          <button
            onClick={goToNext}
            className="slider-arrow right-arrow"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </section>
      <div className="overlay-text">
    <h2>Welcome to Our Blog</h2>
    <p>Explore the latest tech insights and innovations</p>
  </div>
</div>
    </>
  );
};

export default ImageSlider;
