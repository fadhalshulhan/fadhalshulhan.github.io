import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

// Styled components
const StyledCarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
  border-radius: 16px;
`;

const StyledCarouselContainer = styled.div`
  .carousel-indicators {
    bottom: -75px;
  }

  .carousel-indicators button {
    width: 10px !important;
    height: 10px !important;
    border-radius: 50% !important;
    background-color: #ccc !important;
    border: none !important;
    margin: 0 8px;
    display: flex;
    justify-content: center;
  }

  .carousel-indicators .active {
    background-color: #28a745 !important;
    width: 16px !important;
    height: 16px !important;
    border-radius: 50% !important;
    margin: -3px 6px;
  }
`;

const MyCarouselTwo = ({ title, images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const imageRefs = React.useRef([]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length]);

  return (
    <StyledCarouselContainer>
      <Carousel
        variant="dark"
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        interval={null} // Disable auto sliding if keyboard navigation is prioritized
      >
        {images.map((dt, i) => (
          <Carousel.Item key={`carousel-${i}`}>
            <StyledCarouselImage
              ref={(el) => (imageRefs.current[i] = el)}
              src={dt?.publicURL}
              alt={`project-${title}-${i}`}
              onClick={() => console.log(`Image ${i} clicked`)}
            />
            <Carousel.Caption>
              <h3>{dt?.title}</h3>
              <p>{dt?.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledCarouselContainer>
  );
};

export default MyCarouselTwo;
