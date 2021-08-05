import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgPassword() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x={4.5} y={0.5} width={9} height={13} rx={4.5} stroke="#666" />
      <Rect
        x={1.5}
        y={7.5}
        width={15}
        height={10}
        rx={0.5}
        fill="#fff"
        stroke="#666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path fill="#fff" d="M10 5h7v2h-7z" />
      <Rect x={7} y={11} width={1} height={3} rx={0.5} fill="#666" />
      <Rect x={10} y={11} width={1} height={3} rx={0.5} fill="#666" />
    </Svg>
  );
}

export default SvgPassword;
