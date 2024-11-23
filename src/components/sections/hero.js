import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

.button-container {
  display: flex; /* Menjadikan elemen dalam container sejajar horizontal */
  justify-content: flex-end; /* Menyelaraskan tombol ke kanan */
  align-items: center; /* Menyelaraskan secara vertikal */
  gap: 16px; /* Menambahkan jarak antar tombol */
  margin-top: 36px; /* Jarak dari elemen sebelumnya */
  width: 100%; /* Memastikan container mengambil seluruh lebar */
  border-radius: 16px;

  /* Media query untuk layar kecil */
  @media (max-width: 768px) {
    flex-direction: column; /* Ubah menjadi vertikal */
    align-items: flex-start; /* Rata kiri */
  }
}

.email-link {
  ${({ theme }) => theme.mixins.bigButton};
  margin: 0; /* Pastikan tidak ada margin default */
}
    
   @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(5deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }

  .wave-emoji {
    font-size: 3rem;
    display: inline-block;
    animation: wave 2s ease-in-out infinite;
  }
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1>
      <span
        style={{
          fontSize: '2rem',
          display: 'inline-block',
          animation: 'wave 1s infinite',
        }}
      >
        👋&nbsp;
      </span>
      Hi, my name is{' '}
    </h1>
  );
  const two = <h2 className="big-heading">{data?.name}</h2>;
  const three = <h3 className="big-heading">{data?.title}</h3>;
  const four = (
    <>
      <p>
        {data?.description}{' '}
        <a href={data?.workLink} rel="noreferrer" target='_blank'>
          {data?.work}
        </a>
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href= {data?.button?.link}
      target="_blank"
      rel="noreferrer">
      {data?.button?.text}
    </a>
  );

  const six = (
    <a
      className="email-link"
      href= {data?.buttonwork?.link}
      rel="noreferrer">
      {data?.buttonwork?.text}
    </a>
  );

const buttons = (
  <div className="button-container">
    {five}
    {six}
  </div>
);

const items = [one, two, three, four, buttons];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
