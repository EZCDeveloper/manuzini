import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          ¡Welcome To <br />
          My Personal Portfolio!
        </SectionTitle>
        <SectionText>
        The purpose of this website is to show you a little about me and tell you about my great passion which is to develop Great Apps!.
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;