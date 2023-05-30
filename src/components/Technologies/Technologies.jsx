import React from "react";
import { DiFirebase, DiReact, DiDocker } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  StackContainer,
} from "./TechnologiesStyles";

import {
  frontendStack,
  backendStack,
  devopsStack,
} from "../../constants/constants";

import Stack from "./Stack";

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider style={{ marginBottom: "2rem" }} />
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
        <StackContainer>
          <Stack stack={frontendStack} />
        </StackContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express and Databases
          </ListParagraph>
        </ListContainer>
        <StackContainer>
          <Stack stack={backendStack} />
        </StackContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker, Jenkins and Kubernetes
          </ListParagraph>
        </ListContainer>
        <StackContainer>
          <Stack stack={devopsStack} />
        </StackContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
