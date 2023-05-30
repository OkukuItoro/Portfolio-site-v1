import React, { useState, useEffect } from "react";

import { BsViewList, BsGrid } from "react-icons/bs";
import {
  BlogCard,
  BlogCardFull,
  SubContainer,
  CardInfo,
  ListCardInfo,
  ExternalLinks,
  LsExternalLinks,
  FlexContainer,
  HeaderThree,
  Hr,
  TagList,
  LsTagList,
  LinkBox,
  LsLinkBox,
  Tag,
  LsTag,
  TitleContent,
  ListTitleContent,
  Img,
  ImgFull,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const [view, setView] = useState("grid");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
    <Section nopadding id="projects">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SectionTitle main>Projects</SectionTitle>
        <div
          style={{
            padding: "6rem 2rem 2rem 2rem",
          }}
        >
          {viewportWidth > 990 ? (
            view === "list" ? (
              <BsViewList
                onClick={() => setView("grid")}
                size={30}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <BsGrid
                onClick={() => setView("list")}
                size={30}
                style={{ cursor: "pointer" }}
              />
            )
          ) : (
            <BsGrid size={30} />
          )}
        </div>
      </div>
      <SectionDivider style={{ marginBottom: "4rem" }} />
      <FlexContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <>
              {view === "grid" ? (
                <BlogCard key={id}>
                  <Img src={image} />
                  <TitleContent>
                    <HeaderThree title>{title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                    <TagList>
                      {tags.map((tag, i) => (
                        <Tag
                          key={i}
                          style={{
                            backgroundColor: tag.color,
                            color: tag.textColor,
                          }}
                        >
                          {tag.name}
                        </Tag>
                      ))}
                    </TagList>
                  </div>
                  <LinkBox>
                    <ExternalLinks href={visit}>Code</ExternalLinks>
                    <ExternalLinks href={source}>Visit</ExternalLinks>
                  </LinkBox>
                </BlogCard>
              ) : (
                <BlogCardFull key={id}>
                  <ImgFull src={image} />
                  <SubContainer>
                    <ListTitleContent>
                      <HeaderThree title>{title}</HeaderThree>
                      <LsLinkBox>
                        <ExternalLinks target="_blank" href={source}>
                          source code
                        </ExternalLinks>
                        <ExternalLinks target="_blank" href={visit}>
                          visit
                        </ExternalLinks>
                      </LsLinkBox>
                    </ListTitleContent>
                    <ListCardInfo>{description}</ListCardInfo>
                    <div>
                      <LsTagList>
                        {tags.map((tag, i) => (
                          <LsTag
                            key={i}
                            style={{
                              backgroundColor: tag.color,
                              color: tag.textColor,
                            }}
                          >
                            {tag.name}
                          </LsTag>
                        ))}
                      </LsTagList>
                    </div>
                  </SubContainer>
                </BlogCardFull>
              )}
            </>
          )
        )}
      </FlexContainer>
    </Section>
  );
};

export default Projects;
