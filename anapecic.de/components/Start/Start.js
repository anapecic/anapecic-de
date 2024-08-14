import styled, { keyframes } from "styled-components";
import Arrow from "../Svg/Arrow";
import Circle from "../Svg/Circle";

const HeadlineWrapper = styled.div`
  position: relative;
`;

const appearText = keyframes`0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }`;

const Headline = styled.h1`
  font-family: Carlito, sans-serif;
  font-weight: normal;
  font-family: Radley;
  font-weight: normal;
  font-size: 5rem;
  animation: ${appearText} 1s linear forwards 1;
  overflow: hidden;
  white-space: nowrap;
  display: inline;
`;

const Subtitle = styled.h2`
  font-family: Carlito, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  width: 70%;
`;

const KontaktBtn = styled.a`
  align-self: center;
  text-decoration: none;
  border: 2px solid #9b4819;
  background-color: #f4f1e8;
  border-radius: 50px;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #9b4819;
  font-weight: bold;
  font-family: SF, sans-serif;

  &:hover {
    background-color: #9b4819;
    color: #f4f1e8;
  }
`;

export default function Start() {
  return (
    <>
      <HeadlineWrapper>
        <Headline>Hello, I am Ana!</Headline>
        <Circle />
      </HeadlineWrapper>
      <Subtitle>
        Web Developer in Training and <br /> Social Media Marketing Expert
      </Subtitle>
      <KontaktBtn href="#kontakt">Kontakt</KontaktBtn>
      <Arrow />
    </>
  );
}
