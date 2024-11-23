import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({ images = [], title }) => {
  const imageRefs = useRef([]);
  const [modalStack, setModalStack] = useState([]); // Stack to track opened modals
  const [activeIndex, setActiveIndex] = useState(0); // Active index for carousel

  const openModal = (index) => {
    setModalStack((prev) => [...prev, index]); // Add modal to stack
  };

  const closeLastModal = () => {
    setModalStack((prev) => prev.slice(0, -1)); // Remove the last modal from stack
  };

  const closeModal = (index) => {
    setModalStack((prev) => prev.filter((modalIndex) => modalIndex !== index)); // Remove specific modal
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next index
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Move to previous index
  };

  const handleKeyPress = (e) => {
    if (modalStack.length === 0) {
      // Only navigate slides when no modal is open
      if (e.key === 'ArrowRight') {
        handleNext(); // Navigate to next slide
      } else if (e.key === 'ArrowLeft') {
        handlePrev(); // Navigate to previous slide
      }
    }

    if (e.key === 'Escape' && modalStack.length > 0) {
      closeLastModal(); // Close modal with Escape
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [modalStack]);

  return (
    <div>
      <Carousel
        variant="dark"
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      >
        {images.map((dt, i) => (
          <Carousel.Item key={`carousel-${i}`} interval={2000}>
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              className="d-block w-100"
              src={dt?.publicURL}
              alt={`project-${title}-${i}`}
              onClick={() => openModal(i)} // Open fullscreen for specific image
              style={{
                maxHeight: 400,
                objectFit: 'contain',
                cursor: 'pointer',
              }}
            />
            <Carousel.Caption>
              <h3>{dt?.title}</h3>
              <p>{dt?.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Fullscreen Modal */}
      {modalStack.map((index, stackIndex) => (
        <div
          key={`modal-${index}`}
          onClick={() => closeLastModal()} // Close on background click
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor:
              stackIndex === modalStack.length - 1
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(0, 0, 0, 0.3)', // Less opacity for background modals
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000 + stackIndex, // Ensure proper stacking
            cursor: 'pointer', // Allow closing by clicking the background
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // Prevent overflow
              width: 'auto',
              height: '90%',
            }}
          >
            <img
              src={images[index]?.publicURL}
              alt={`Fullscreen Image ${index}`}
              style={{
                objectFit: 'contain', // Ensure image fits within the container without stretching
                maxWidth: 'auto',
                maxHeight: '100%',
                display: 'block',
                margin: 'auto', // Center the image
              }}
            />
          </div>

          {/* Close Button (X) */}
          <button
            onClick={() => closeLastModal()} // Close only the last modal
            className="close-button"
            aria-label="Close"
          >
            <svg
              className="close-icon"
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M11.53 1.53A.75.75 0 0 0 10.47.47L6 4.94 1.53.47A.75.75 0 1 0 .47 1.53L4.94 6 .47 10.47a.75.75 0 1 0 1.06 1.06L6 7.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L7.06 6l4.47-4.47Z"
              ></path>
            </svg>
          </button>
        </div>
      ))}

      <style jsx>{`
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

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1001;
        }

        .close-icon {
          width: 12px;
          height: 12px;
        }

        .close-button:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
