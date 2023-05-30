import React, { useState, useEffect } from "react";

import {
  Img,
  SectionBody,
  AboutText,
  AboutTextHeader,
  AboutTextBox,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionDivider />
      <SectionBody>
        <Img src="images/profile-1.jpg" />
        <AboutTextBox>
          <AboutTextHeader>I'm Passionated about what I do.</AboutTextHeader>

          {viewportWidth > 500 ? (
            <AboutText>
              I am a diligent and ambitious individual with a passion for
              learning and exploring new technologies. With over three years of
              experience in web development, I bring a strong foundation in
              creating innovative digital solutions. As a collaborator at heart,
              I thrive in team environments, valuing open communication and the
              power of collective ideas. Constantly pushing my limits, I strive
              to deliver high-quality work and contribute to the ever-evolving
              world of technology. My insatiable curiosity drives me to stay
              up-to-date with the latest industry trends and advancements,
              ensuring that I am at the forefront of cutting-edge technology.
              With a curious mind, relentless drive, and an unwavering
              commitment to excellence, I am poised to make a worthwhile impact
              in the digital realm, turning ideas into reality and shaping the
              future of technology-driven experiences.
            </AboutText>
          ) : (
            <AboutText>
              I am a diligent and ambitious individual with a passion for
              learning and exploring new technologies. With over three years of
              experience in web development, I bring a strong foundation in
              creating innovative digital solutions. My insatiable curiosity
              drives me to stay up-to-date with the latest industry trends and
              advancements, ensuring that I am at the forefront of cutting-edge
              technology.
            </AboutText>
          )}
        </AboutTextBox>
      </SectionBody>
    </Section>
  );
};

export default Timeline;
