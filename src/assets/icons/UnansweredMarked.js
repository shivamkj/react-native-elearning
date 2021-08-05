import React from "react";
import Svg, { Circle } from "react-native-svg";

const UnansweredAndMarked = () => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 16 16"
      fill="#7D59A0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <Circle cx={8} cy={8} r={8} fill="#7D59A0" />
    </Svg>
  );
};

export default React.memo(UnansweredAndMarked);
