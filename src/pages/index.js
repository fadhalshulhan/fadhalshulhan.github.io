import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Certificate, Contact } from '@components';
import staticData from '../../dummy/data.json';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  const [data, setData] = useState(staticData);

  useEffect(() => {
  }, [])

  return (<Layout location={location} data={data}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data} />
      <About data={data?.about_me} />
      <Jobs data={data} />
      <Featured />
      <Projects />
      <Certificate />
      <Contact />
  
    </StyledMainContainer>
  </Layout>)
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
