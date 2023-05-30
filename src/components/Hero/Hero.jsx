import React from "react";

import { FaFileDownload } from "react-icons/fa";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, HeroTextName } from "./HeroStyles";
import { ButtonBack } from "../../styles/GlobalComponents";

const Hero = (props) => {
  const handleDownload = () => {
    const resumeUrl = "/docs/resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = "patrick-okuku-resume.pdf";
    link.click();

    // document.body.removeChild(link);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Patrick.
        </SectionTitle>
        <HeroTextName>Full Stack Developer</HeroTextName>
        <SectionText>
          With passion for building exceptional digital experiences. I have the
          skills and expertise to create beautiful, functional, and
          user-friendly web applications.
        </SectionText>
        <ButtonBack onClick={handleDownload}>
          <FaFileDownload size={15} style={{ marginRight: "1rem" }} />
          Download Resume
        </ButtonBack>
      </LeftSection>
    </Section>
  );
};

export default Hero;
