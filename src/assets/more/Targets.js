import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTargets() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x={0.5} y={1.5} width={17} height={16} rx={0.5} stroke="#666" />
      <Path fill="#666" d="M0 4h18v1H0z" />
      <Rect x={4} width={1} height={3} rx={0.5} fill="#666" />
      <Rect x={13} width={1} height={3} rx={0.5} fill="#666" />
      <Rect x={7} width={1} height={3} rx={0.5} fill="#666" />
      <Rect x={10} width={1} height={3} rx={0.5} fill="#666" />
      <Rect
        x={6.086}
        y={11.256}
        width={1}
        height={3}
        rx={0.5}
        transform="rotate(-45 6.086 11.256)"
        fill="#666"
      />
      <Rect
        x={7.5}
        y={12.67}
        width={6}
        height={1}
        rx={0.5}
        transform="rotate(-45 7.5 12.67)"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgTargets;
