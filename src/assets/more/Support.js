import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgSupport() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={9} cy={9} r={9} fill="#666" />
      <Circle cx={9} cy={9} r={8} fill="#fff" />
      <Path
        d="M8.5 4.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zM8.5 7.5a.5.5 0 011 0v6a.5.5 0 01-1 0v-6z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgSupport;
