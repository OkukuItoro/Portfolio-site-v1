import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Full Stack Developer
      </SectionTitle>
      <SectionText>
        With passion for building exceptional digital experiences. With a deep
        understanding of both front-end and back-end development, I have the
        skills and expertise to create beautiful, functional, and user-friendly
        web applications.
      </SectionText>
      <Button onClick={() => (window.location = "https://goggle.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
