import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const AnsweredMarked = () => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 17 17"
      fill="#7D59A0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <Circle cx={8} cy={8} r={8} fill="#7D59A0" />
      <Path
        d="M11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        fill="#7FC322"
      />
      <Rect x={12.332} y={12.333} width={3.333} height={0.667} rx={0.333} fill="#fff" />
      <Rect x={12.332} y={13.667} width={3.333} height={0.667} rx={0.333} fill="#fff" />
      <Rect x={12.332} y={15} width={3.333} height={0.667} rx={0.333} fill="#fff" />
    </Svg>
  );
};

export default React.memo(AnsweredMarked);
