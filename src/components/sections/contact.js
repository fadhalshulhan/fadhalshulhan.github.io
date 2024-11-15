import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import MyCarousel from '../carousel';

import kompetensi from '../../../static/slides/kompetensi.jpg';
import kursus from '../../../static/slides/kursus.jpg';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
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

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
    
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <br />

      <MyCarousel
        title={'Achievement'}
        images={[
          {
            // title: 'The Complete App Design Course - UX, UI and Design Thinking ',
            desc: '',
            publicURL: kursus
          },
          {
            // title: 'DTS Kominfo PROA (Class B): UI/UX Design Mastery (Completion with Honor)',
            desc: '',
            publicURL: kompetensi
          },
        ]}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="title">Get In Touch</h2>

      <p>
        I’m currently looking for new opportunities! My inbox is always open—whether you have a question or just want to say hi, I’ll do my best to respond!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;

