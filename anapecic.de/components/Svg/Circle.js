import styled, { keyframes } from "styled-components";

const circleAppear = keyframes`
  to {
    stroke-dashoffset: 0;
  }
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

const CircleSvg = styled.svg`
  position: absolute;
  top: 5px;
  right: 0;
  transform: scale(1.1);
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  pointer-events: none;
  animation: ${circleAppear} 2s linear forwards infinite;
  animation-delay: 1s;
  width: 45.723724mm; /* Adjust based on your design */
  height: 22.645947mm; /* Adjust based on your design */
  viewbox: "0 0 45.723724 22.645947"; /* Adjust based on your design */
`;

export default function Circle() {
  return (
    <CircleSvg>
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
      </GLayer>
    </CircleSvg>
  );
}
