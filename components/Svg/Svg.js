import styled, { keyframes } from "styled-components";

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

export default function Arrow() {
  return (
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
  );
}
