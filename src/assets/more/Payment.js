import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgPayment() {
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
        d="M7 9.84h.813L9.667 13h1l-2-3.2c1-.4 1.415-1.026 1.478-2.28H11v-.614h-.876c-.095-.577-.285-1.04-.686-1.292H11V5H7v.8h.667c1.333 0 1.666.4 1.75 1.106L7 6.969v.551h2.438C9.375 8.524 8.763 9 7.749 9H7v.84z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgPayment;
