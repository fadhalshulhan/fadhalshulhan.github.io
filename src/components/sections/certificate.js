import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import MyCarouselTwo from '../carouselTwo';

import kompetensi from '../../../static/slides/kompetensi.jpg';
import kursus from '../../../static/slides/kursus.jpg';
import kegiatan from '../../../static/slides/tia2018.jpg';

const StyledCertificateSection = styled.section`
 
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .carousel-indicators {
          bottom: -75px;  /* Menurunkan posisi indikator carousel */
        }
`;

const Certificate = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig(0, 0.25));
  }, []);

  return (
  <StyledCertificateSection id="certificate" ref={revealContainer}>
  <h2 className="numbered-heading">Learning Journey</h2>
  <div className="carousel-container">
    <MyCarouselTwo
      title="Certificate"
      images={[
        { desc: '', publicURL: kompetensi },
        { desc: '', publicURL: kursus },
        { desc: '', publicURL: kegiatan },
      ]}
    />
  </div>
</StyledCertificateSection>
  );
};

export default Certificate;

