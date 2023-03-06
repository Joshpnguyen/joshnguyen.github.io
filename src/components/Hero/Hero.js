import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there! <br />
        I am Josh Nguyen
      </SectionTitle>
      <SectionText>
        I am an aspiring Software Engineer.
      </SectionText>
      <Button onClick={() => window.location = 'Https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;