import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import FileSaver from 'file-saver';

const Hero = (props) => {
  const saveFile = () => {
    FileSaver.saveAs(
      "/resume.pdf",
      "Josh Nguyen Resume.pdf"
    );
  }

  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there! <br />
        I am Josh Nguyen
      </SectionTitle>
      <SectionText>
        I am an aspiring Software Engineer.
        <br></br>
        Click the link below to download my resume!
      </SectionText>
      <Button onClick={saveFile}>Resume</Button>
    </LeftSection>
  </Section>
  );
};

export default Hero;