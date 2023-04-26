import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => {
  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there! <br />
        My name is Josh Nguyen
      </SectionTitle>
      <SectionText>
        I am an aspiring Software Engineer.
        <br></br>
        Click the link below to download my resume!
      </SectionText>
      <Button>My Resume</Button>
    </LeftSection>
  </Section>
  );
};

export default Hero;