import styled, { keyframes } from "styled-components";

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

const circleAppear = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Circle = styled.svg`
  position: absolute;
  top: -50px;
  right: -185px;
  transform: scale(4.2);
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  pointer-events: none;
  animation: ${circleAppear} 2s linear forwards infinite;
  animation-delay: 1s;
  viewbox: "0 0 45.723724 22.645947";
`;

const GLayer = styled.g``;

const Path1 = styled.path`
  fill: none;
  fill-opacity: 1;
  fill-rule: evenodd;
  stroke-width: 0.264583;
`;

const Text = styled.text`
  font-size: 3.175px;
  fill: none;
  fill-opacity: 0.262948;
  fill-rule: evenodd;
  stroke: #000000;
  stroke-width: 0;
  stroke-dasharray: none;
  stroke-opacity: 1;
`;

const Tspan = styled.tspan`
  stroke-width: 0;
`;

const Path7 = styled.path`
  fill: none;
  fill-opacity: 0.262948;
  fill-rule: evenodd;
  stroke: #9b4819;
  stroke-width: 1.15461;
  stroke-opacity: 1;
`;

//arrow svg
const downMotion = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
  }
`;

const ArrowSvg = styled.svg`
  height: 90px;
  margin-top: 70px;
  animation: ${downMotion} 1s ease-in-out infinite;

  &:hover {
    animation: none;
    cursor: pointer;
  }
`;

export default function Start() {
  return (
    <>
      <HeadlineWrapper>
        <Headline>Hello, I am Ana!</Headline>
        <Circle>
          <GLayer id="layer1">
            <Path1
              d="m 101.85303,45.077808 c -2.3197,4.54465 -7.499381,6.380395 -10.556202,10.270895 -1.228231,1.563203 -2.481557,3.724883 -2.853026,5.706051 -0.213212,1.137137 -0.498436,2.268932 -0.570603,3.423632 -0.03258,0.521242 0.566618,1.910477 0.855906,2.28242 0.412853,0.530813 0.888542,1.023035 1.426514,1.426512 3.002102,2.251577 14.018161,-1.494647 17.118151,-2.567723 1.60146,-0.55435 7.33956,-2.746793 7.70317,-4.564841 0.51134,-2.556681 -3.91699,-4.744061 -5.42075,-5.420748 -3.39356,-1.527107 -7.17337,-2.551428 -10.841494,-3.138329 -5.82894,-0.93263 -11.774857,-1.997117 -17.688761,-1.997117"
              id="path1"
            />
            <Text x="40.798271" y="181.45244" id="text7">
              <Tspan x="40.798271" y="181.45244">
                Ana
              </Tspan>
            </Text>
            <Path7
              d="m 130.08289,72.899769 c -5.39661,-3.024231 -12.57143,-2.427406 -18.66373,-1.226413 -28.656579,5.649154 1.97813,21.083638 17.00473,18.804995 30.11555,-4.56674 11.33784,-21.257819 -8.70974,-21.257819"
              id="path7"
            />
          </GLayer>{" "}
        </Circle>
      </HeadlineWrapper>
      <Subtitle>
        Web Developer in Training and <br /> Social Media Marketing Expert
      </Subtitle>
      <KontaktBtn href="#kontakt">Kontakt</KontaktBtn>
      <a href="#gallery">
        <ArrowSvg
          width="7.7484922mm"
          height="45.741932mm"
          viewBox="0 0 7.7484922 45.741932"
          version="1.1"
          id="svg1"
        >
          <g id="layer1" transform="translate(-162.49751,-146.06099)">
            <path
              style={{
                fill: "none",
                fillOpacity: 0.262948,
                fillRule: "evenodd",
                stroke: "#9b4819",
                strokeWidth: "0.799999",
              }}
              d="m 166.61671,146.07493 c 0.2853,8.17867 0.53523,16.35866 0.85591,24.53602 0.46034,11.73857 0.21546,-4.84861 0.57061,12.55331 0.46009,22.5445 -4.39932,-8.27377 -5.13545,-8.27377 -0.21201,0 2.92243,8.84438 4.27954,8.84438 4.92106,0 1.75355,-12.44179 0.2853,3.70893"
              id="path6"
            />
            <path
              style={{
                fill: "none",
                fillOpacity: 0.262948,
                fillRule: "evenodd",
                stroke: "#9b4819",
                strokeWidth: "0.799999",
              }}
              d="m 215.68876,282.16426 -0.2853,-1.1412"
              id="path8"
            />
          </g>
        </ArrowSvg>
      </a>
    </>
  );
}
