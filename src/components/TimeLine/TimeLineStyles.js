import styled from "styled-components";

export const Img = styled.img`
  width: 35%;
  border-radius: 5px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const SectionBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
`;

export const AboutTextBox = styled.h3`
  margin-left: 1.5rem;
  width: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0;
  }
`;

export const AboutTextHeader = styled.h3`
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const AboutText = styled.p`
  font-size: 2.1rem;
  text-align: justify;
  color: gray;
  font-weight: 400;
  line-height: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.7rem;
  }
`;
