import { useState } from "react";
import "./imageSlide.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }: any) => {
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
          <h2 className="slider-title">Featured Blogs</h2>
          <p>We feature blog based on your responses to the new letter.</p>
          <div className="image-slider" role="region" aria-label="Image Slider">
            <button
              onClick={goToPrevious}
              className="slider-arrow left-arrow"
              aria-label="Previous image"
            >
              ←
            </button>
            <figure>
              <div className="svg-slide">{slides[currentIndex].component}</div>
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
          <h2>{slides[currentIndex].title}</h2>
          <h3>
            <Link to={`/blog/${slides[currentIndex].id}`}>Read more</Link>
          </h3>
          <p>Replies : {slides[currentIndex].count} </p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
