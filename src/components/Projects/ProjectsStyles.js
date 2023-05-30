import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

export const ImgFull = styled.img`
  width: 40%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
`;

export const FlexContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 45%;
  margin: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 47%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 0 2.5rem 0;
  }
`;
export const BlogCardFull = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  width: 95%;
  margin: 1rem;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  padding: 2rem;
  width: 60%;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
`;
export const ListTitleContent = styled.div`
  z-index: 20;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  /* font-size: 2rem; */
  line-height: 24px;
  text-align: start;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    text-align: justify;
    margin-left: 2rem;
    font-size: 1.3rem;
    width: 85%;
  }
`;
export const ListCardInfo = styled.p`
  width: 95%;
  color: #e4e6e7;
  font-style: 2rem;
  margin-block: 1rem;
  line-height: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const LinkBox = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const LsLinkBox = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0.5rem;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: #0e1112;
  border-radius: 5px;
  transition: 0.5s;
  margin-right: 1rem;
  &:hover {
    background: white;
    color: #0e1112;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 1rem 0 0 2rem;
`;
export const LsTagList = styled.ul`
  display: flex;
  padding-block: 0.4rem;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  background-color: #13adc7;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-size: 1.5rem;
  margin: 1rem 1rem 0 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0.4rem;
    font-size: 1.2rem;
  }
`;
export const LsTag = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-size: 1.5rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
`;
